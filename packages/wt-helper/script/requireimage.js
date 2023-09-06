const fs = require('fs');
const {start} = require('repl');
// const startPath = ['images'];
const startPath = ['images'];
const moduleName = 'images';
const pathjs = './app/resource';
const imagejs = 'images.js';
const suf = ['.png', '.gif'];
const mid = [
  '@1x.ios',
  '@2x.ios',
  '@3x.ios',
  '@1x.android',
  '@2x.android',
  '@3x.android',
];

// const imageFileNames = () => {
//   const array = fs
//     .readdirSync('src/res/images')
//     .filter((file) => {
//       return file.endsWith('.png');
//     })
//     .map((file) => {
//       return file.replace('@2x.png', '').replace('@3x.png', '');
//     });
//   return Array.from(new Set(array));
// };
// const generate = () => {
//   let properties = imageFileNames()
//     .map((name) => {
//       return `${name}: require('./images/${name}.png')`;
//     })
//     .join(',\n  ');
//   const string = `const images = {
//     ${properties}
//   }
//   export default images
//   `;
//   fs.writeFileSync('src/res/images.js', string, 'utf8');
// };

const listImageFileNames = (path) => {
  const array = fs
    .readdirSync(path)
    .filter((file) => {
      return file.endsWith('.png');
    })
    .map((file) => {
      return file.replace('@2x.png', '.png').replace('@3x.png', '.png');
    });
  return Array.from(new Set(array));
};

const propertiesImageFileNames = (path, base) => {
  let lists = listImageFileNames(path);
  // console.log(`propertiesImageFileNames  path ${path}`);
  let properties = lists
    .map((name) => {
      const p = path
        .replace(base, '')
        .replace('/', '')
        .replace(/[()]/g, '')
        .replace(/[/\-.,\s]/g, '_');
      const n = name
        .replace('.png', '')
        .replace('/', '_')
        .replace(/[()]/g, '')
        .replace(/[/\-.,\s]/g, '_');
      const pp = path.replace(base, '.');
      return `${p}_${n}: require('${pp}/${name}')`;
    })
    .join(`,\n  `);
  return properties;
};

const walkRecursive = (path, base) => {
  const filenames = fs.readdirSync(path);
  let arrays = Array();
  let text = '';
  // console.log(`in path ${path}`);
  filenames.forEach((file) => {
    const filePath = `${path}/${file}`;
    const isDir = fs.lstatSync(filePath).isDirectory();
    if (isDir && !(file === 'res') && !(file === 'assets')) {
      const t = walkRecursive(filePath, base);
      arrays.push(t);
    }
  });
  let lists = listImageFileNames(path);
  if (lists.length > 0) {
    arrays.push(`\/\/${path}`);
    const array = propertiesImageFileNames(path, base);
    arrays.push(array);
    console.log(`image in ${path}`);
  } else {
  }
  text = text.concat(arrays.filter(Boolean).join(`,\n  \n  `));
  return text;
};

const generateRecursive = (paths) => {
  let properties = Array();
  paths.forEach((path) => {
    properties.push(`\/\/\/\/\/\/${path}`);
    const filePath = `${pathjs}/${path}`;
    const t = walkRecursive(filePath, pathjs);
    properties.push(t);
  });
  let text = properties.filter(Boolean).join(`,\n  \n  \n  `);
  const string = `const ${moduleName} = {
  ${text}
}
export default ${moduleName}
`;
  fs.writeFileSync(`${pathjs}/${imagejs}`, string, 'utf8');
};

// const generateRecursive = (path) => {
//   let properties = walkRecursive(path);
//   const string = `const images = {
//   ${properties}
// }
// export default images
// `;
//   fs.writeFileSync(`${path}/${imagejson}`, string, 'utf8');
// };

// create require list of image
//npm run images
generateRecursive(startPath);
