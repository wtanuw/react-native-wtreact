import React from 'react';
import {Text, StyleSheet, StyleSheetProperties, Image, ImageStyle} from 'react-native';
import R from 'app/resource/R'
import * as Shared from 'app/Shared';

import ScalableImage from 'react-native-scalable-image'

interface Props {
  style?: ImageStyle,
  defaultStyle?: boolean,
}

const KusuriStarTopRight = (props:Props) => {
  const { style, defaultStyle = true} = props;
  return (
    <Image 
      {...props}
      source={R.images.images_patient_favstar} 
      resizeMode='contain' 
      style={{ 
        ...(defaultStyle && styles.image), 
        position:'absolute', top:10, right:10, width:40, height:40 
      }} 
    />
  )
}

const KusuriStarRight = (props:Props) => {
  const { style, defaultStyle = true} = props;
  return (
    <Image 
      {...props}
      source={R.images.images_patient_favstar} 
      resizeMode='contain' 
      style={{ 
        ...(defaultStyle && styles.image), 
        flex:1, alignSelf:'flex-end', aspectRatio:1
      }} 
    />
  )
}

const KusuriNoImage = (props:Props) => {
  const { style, defaultStyle = true} = props;
  return (
    <Image 
      {...props}
      source={R.images.images_pharma_noimage} 
      resizeMode='contain' 
      
      // width={500}
      style={{ 
        ...(defaultStyle && styles.image), 
        ...Shared.sharedstyles.maxwidthipad,
        ...Shared.sharedstyles.imageratio,
        height: 'auto',
        width: '100%',
        // height: '100%',
        backgroundColor:R.colors.kusuri.backgroundGray
        // flexBasis: 100,
        // flexShrink:1,
        // width: '30%',
        // width: 400,
    // height: undefined,
        // aspectRatio: 640/300,
        // backgroundColor:R.colors.kusuri.textButtonLink

        // flex:1, alignSelf:'flex-end', aspectRatio:1
      }} 
    />
  )
}

interface Props2 {
  style?: ImageStyle;
  defaultStyle?: boolean;
  cond?: number;
  ur_status?: number;

}

// const KusuriCond = (props:Props) => {
//   const { style, defaultStyle = true, urp_cond} = props;
//   return (
//     {urp_cond == 1 
//     ? <Image source={R.images.images_patient_status_allavailable} style={{resizeMode:'contain', width: '100%'}} />
//     : urp_cond == 2 ?
//     <Image source={R.images.images_patient_status_someavailable} style={{resizeMode:'contain', width: '100%'}} />
//     : urp_cond == 3 ?
//     <Image source={R.images.images_patient_status_notavailable} style={{resizeMode:'contain', width: '100%'}} />
//     : <></>
//     }
//   )
// }

// const KusuriUr = (props:Props) => {
//   const { style, defaultStyle = true, urp_cond} = props;
//   return (
//     {item.urp_status == 2 
//       ? <Image source={R.images.images_pharma_status_replied} style={{resizeMode:'contain', width: '100%'}} />
//       : maxTime-diffMinute(item.created_at)<0 
//       ? <Image source={R.images.images_pharma_status_noorder} style={{resizeMode:'contain', width: '100%'}} />
//       : item.urp_status == 0 
//       ? <Image source={R.images.images_pharma_status_new} style={{resizeMode:'contain', width: '100%'}} />
//       : <></>
//       }
//   )
// }

// const KusuriStatusButton = props => {
//   const {style, defaultStyle = false} = props;
//   const {title} = props;
//   const {gray, red, negative=true} = props;
//   const {disabled} = props;
//   const {onPress} = props;
//   var styleObj = StyleSheet.flatten([style]);
//   return (
//     <View
//       style={{
//         ...styles.button,
//         backgroundColor: gray ? R.colors.kusuri.textWhite 
//                               : red ? R.colors.kusuri.textWhite
//                                          : R.colors.kusuri.textWhite,
//         borderColor: gray ? R.colors.kusuri.textGray
//         : red ? R.colors.kusuri.textRed 
//               : R.colors.kusuri.textButtonPatient,
//         borderWidth: 2,
//         ...style,
//       }}
//       disabled={disabled}
//       onPress={onPress}>
//       <KusuriText
//       text={title}
//         style={{
//           ...styles.text,
//           color: gray ? R.colors.kusuri.textGray
//                       : red ? R.colors.kusuri.textRed 
//                             : R.colors.kusuri.textButtonPatient,
//           ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
//         }}>
//       </KusuriText>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  image:{

  },
  text: {
    // color: '#111825',
    fontSize: R.fonts.Small,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    fontFamily: 'Meiryo',
    // fontFamily: 'PKNKSquareFreeVersion-Regular',
    color:R.colors.kusuri.textApp,
  },
});

export default KusuriStarTopRight;
export {KusuriStarTopRight};
export {KusuriStarRight};
export {KusuriNoImage};