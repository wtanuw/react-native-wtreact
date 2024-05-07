const MINECRAFT = {
  white: '#fff',
  black: '#000',
  // your colors
  BlackDye: '#1D1D21',
  BrownDye: '#835432',
  BlueDye: '#3C44AA',
  RedDye: '#B02E26',
  GreenDye: '#5E7C16',
  WhiteDye: '#F9FFFE',
  YellowDye: '#FED83D',
  PurpleDye: '#8932B8',
  CyanDye: '#169C9C',
  GrayDye: '#474F52',
  PinkDye: '#F38BAA',
  LightGrayDye: '#9D9D97',
  LimeDye: '#80C71F',
  LightBlueDye: '#3AB3DA',
  MagentaDye: '#C74EBD',
  OrangeDye: '#F9801D',
  InkSac: '#1D1D21',
  CocoaBeans: '#835432',
  LapisLazuli: '#3C44AA',
  BoneMeal: '#F9FFFE',
};

const pokemon = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const pokemongen = {
  // Gen I:
  Red: '#ff1111',
  Blue: '#1111ff',
  Yellow: '#ffd733',
  // Gen II:
  Gold: '#daa520',
  Silver: '#c0c0c0',
  Crystal: '#4fd9ff',
  // Gen III:
  Ruby: '#a00000',
  Sapphire: '#0000a0',
  Emerald: '#00a000',
  FireRed: '#ff7327',
  LeafGreen: '#00dd00',
  Colloseum: '#b6cae4',
  XDGaleofDarkness: '#604e82',
  // Gen IV:
  Diamond: '#aaaaff',
  Pearl: '#ffaaaa',
  Platinum: '#999999',
  HeartGold: '#b69e00',
  SoulSilver: '#c0c0e1',
  // Gen V:
  Black: '#444444',
  White: '#e1e1e1',
  // Gen VI:
  X: '#6376b8',
  Y: '#ed5540',
  OmegaRuby: '#cf3025',
  AlphaSapphire: '#1768d1',
  // Gen VII:
  Sun: '#f1912b',
  Moon: '#5599ca',
  UltraSun: '#e35627',
  UltraMoon: '#1f62a3',
};

// Legendary Team:: b3b3b3
// Harbinger Team:: a80000
// Ilex Team:: ff00ee
// Rage Team:: d600c8
// Under Team:: 2bff00
// Olivine Team:: b000a4
// Icirrus Team:: ff7700
// Snowpoint Team:: 00b7c4
// Alph Team:: 7d0175
// Union Team:: deb6db
// Pallet Team:: 0900ff
// Underground Team:: df82ed
// Victory Team:: 53519e
// Mountain Team:: ab3eb5
// Safari Team:: 751c7a
// Whirl Team:: 662c62
// New Bark Team:: 7d2d76
// Saffron Team:: 2b4463
// Port Team:: 6b3e68
// Blackthorne Team:: 9e769b
// Abandoned Team:: 75735b
// Acuity Team:: 02c768
// Amity Team:: 88ff59
// Aspertia Team:: f78a4f
// Canalave Team:: abd164
// Castelia Team:: ba9898
// Castle Team:: e9f2a4
// Celadon Team:: 57a4c7
// Celestic Team:: 339686
// Cerulean Team:: 0569ff
// Chargestone Team:: dbf518
// Cherrygrove Team:: c379e8
// Cinnabar Team:: 4778cc
// Citadark Team:: 513d8a
// Coronet Team:: 00eeff
// Cyllage Team:: efc055
// Desert Team:: debe66
// Dragonspiral Team:: 9163ff
// Dreamyard Team:: ff0091
// Ecruteak Team:: b37d12
// Fallarbor Team:: 99cc66
// Faraway Team:: e8de6f
// Floarama Team:: 4ba38a
// Fortree Team::  575da6
// Frost Team:: a5c0df
// Fuchsia Team:: f547af
// Gateon Team:: 0075db
// Hearthome Team:: fc88e1
// HQ Team:: c9ba49
// Lacunosa Team:: f2e71b
// Lavaridge Team:: f28b0c
// Lavender Team:: 04007d
// Laverre Team:: 852674
// Libra Team:: b39930
// Lilycove Team:: 14afde
// Lost Team:: a39372
// Lostlorn Team:: faca69
// Lumiose Team:: ffff7e
// Mahogany Team:: d43d1a
// Marsh Team:: 155661
// Mauville Team:: de9cf2
// Meteor Team:: 825a2a
// Moon Team:: 3859ff
// Mossdeep Team:: 8ce625
// Nuvema Team:: d16302
// Opelucid Team:: 9e7e00
// Outskirt Team:: be3dff
// Pacifidlog Team:: 00e0f0
// Parfum Team:: e78a61
// Pewter Team:: 75a897
// Phenac Team:: 4cbf46
// Pyre Team:: 037e87
// Pyrite Team:: 1a520c
// Realgam Team:: 827e7a
// Relic Team:: 0ac200
// Rustboro Team:: 942b0c
// S.S. Anne Team:: 6cc4b2
// Seafoam Team:: a1ceff
// Shadow Lab Team:: a0ff7a
// Shipwreck Team:: 61b1d8
// Silver Team:: d3d3d3
// Sinjoh Team:: e8de6f
// Sky Team:: 8ec920
// Slateport Team:: 00e3a3
// Stark Team:: 569491
// Sunyshore Team:: 95d6db
// Verdanturf Team:: 04c991
// Village Team:: 74c49f
// Viridian Team:: 0600b3
// White Team:: cce36f

const nsswitch = {
  Black: {
    body: '#313131',
    button: '#0F0F0F',
  },
  Gray: {
    body: '#828282',
    button: '#0F0F0F',
  },
  NeonRed: {
    body: '#FF3C28',
    button: '#1E0A0A',
  },
  NeonBlue: {
    body: '#0AB9E6',
    button: '#001E1E',
  },
  NeonYellow: {
    body: '#E6FF00',
    button: '#142800',
  },
  NeonGreen: {
    body: '#1EDC00',
    button: '#002800',
  },
  NeonPink: {
    body: '#FF3278',
    button: '#28001E',
  },
  Red: {
    body: '#E10F00',
    button: '#280A0A',
  },
  Blue: {
    body: '#4655F5',
    button: '#00000A',
  },
  NeonPurple: {
    body: '#B400E6',
    button: '#140014',
  },
  NeonOrange: {
    body: '#FAA005',
    button: '#0F0A00',
  },
  White: {
    body: '#FFFFFF',
    button: '#323232',
  },

  SuperSmashBrosUltimateEditionGrayJoyCon: {
    body: '#828282',
    button: '#0F0F0F',
  },
  PokemonLetsGoEeveeBrownLeftJoyCon: {
    body: '#C88C32',
    button: '#281900',
  },
  PokemonLetsGoPikachuYellowRightJoyCon: {
    body: '#FFDC00',
    button: '#322800',
  },
  NintendoLaboCreatorsContestEditionCardboardColoredJoyCon: {
    body: '#D7AA73',
    button: '#1E1914',
  },
  DragonQuestXISLottoEditionRoyalBlueJoyCon: {
    body: '#1473FA',
    button: '#00000F',
  },
  DisneyTsumTsumFestivalNeonPurpleLeftJoyCon: {
    body: '#B400E6',
    button: '#140014',
  },
  DisneyTsumTsumFestivalNeonPinkRightJoyCon: {
    body: '#FF3278',
    button: '#28001E',
  },
  AnimalCrossingNewHorizonsPastelGreenLeftJoyCon: {
    body: '#82FF96',
    button: '#0A1E0A',
  },
  AnimalCrossingNewHorizonsPastelBlueRightJoyCon: {
    body: '#96F5F5',
    button: '#0A1E28',
  },
  FortniteWildcatEditionYellowLeftJoyCon: {
    body: '#FFCC00',
    button: '#1A1100',
  },
  FortniteWildcatEditionDarkBlueRightJoyCon: {
    body: '#0084FF',
    button: '#000F1E',
  },
  MarioRedBlueEditionRedJoyCon: {
    body: '#F04614',
    button: '#1E1914',
  },
  MonsterHunterRiseEditionGrayJoyCon: {
    body: '#828282',
    button: '#0F0F0F',
  },
  FortniteFleetForceEditionDarkBlueLeftJoyCon: {
    body: '#0084FF',
    button: '#000F1E',
  },
  FortniteFleetForceEditionYellowRightJoyCon: {
    body: '#FFCC00',
    button: '#1A1100',
  },
  LegendofZeldaSkywardSwordDarkBlueLeftJoyCon: {
    body: '#2D50F0',
    button: '#1E0F46',
  },
  LegendofZeldaSkywardSwordDarkPurpleRightJoyCon: {
    body: '#500FC8',
    button: '#00051E',
  },
};

const firebase = {
  yellow: '#FFCA28', //Amber 400
  amber: '#FFA000', //Amber 700
  orange: '#F57C00', //Orange 700
  blue: '#039BE5', //Light Blue 600
  navy: '#2C384A', //
  coral: '#FF8A65', //Deep Orange 300
  grey: '#ECEFF1', //Blue Grey 50
};

const react = {
  aliceblue: `#f0f8ff`,
  antiquewhite: `#faebd7`,
  aqua: `#00ffff`,
  aquamarine: `#7fffd4`,
  azure: `#f0ffff`,
  beige: `#f5f5dc`,
  bisque: `#ffe4c4`,
  black: `#000000`,
  blanchedalmond: `#ffebcd`,
  blue: `#0000ff`,
  blueviolet: `#8a2be2`,
  brown: `#a52a2a`,
  burlywood: `#deb887`,
  cadetblue: `#5f9ea0`,
  chartreuse: `#7fff00`,
  chocolate: `#d2691e`,
  coral: `#ff7f50`,
  cornflowerblue: `#6495ed`,
  cornsilk: `#fff8dc`,
  crimson: `#dc143c`,
  cyan: `#00ffff`,
  darkblue: `#00008b`,
  darkcyan: `#008b8b`,
  darkgoldenrod: `#b8860b`,
  darkgray: `#a9a9a9`,
  darkgreen: `#006400`,
  darkgrey: `#a9a9a9`,
  darkkhaki: `#bdb76b`,
  darkmagenta: `#8b008b`,
  darkolivegreen: `#556b2f`,
  darkorange: `#ff8c00`,
  darkorchid: `#9932cc`,
  darkred: `#8b0000`,
  darksalmon: `#e9967a`,
  darkseagreen: `#8fbc8f`,
  darkslateblue: `#483d8b`,
  darkslategrey: `#2f4f4f`,
  darkturquoise: `#00ced1`,
  darkviolet: `#9400d3`,
  deeppink: `#ff1493`,
  deepskyblue: `#00bfff`,
  dimgray: `#696969`,
  dimgrey: `#696969`,
  dodgerblue: `#1e90ff`,
  firebrick: `#b22222`,
  floralwhite: `#fffaf0`,
  forestgreen: `#228b22`,
  fuchsia: `#ff00ff`,
  gainsboro: `#dcdcdc`,
  ghostwhite: `#f8f8ff`,
  gold: `#ffd700`,
  goldenrod: `#daa520`,
  gray: `#808080`,
  green: `#008000`,
  greenyellow: `#adff2f`,
  grey: `#808080`,
  honeydew: `#f0fff0`,
  hotpink: `#ff69b4`,
  indianred: `#cd5c5c`,
  indigo: `#4b0082`,
  ivory: `#fffff0`,
  khaki: `#f0e68c`,
  lavender: `#e6e6fa`,
  lavenderblush: `#fff0f5`,
  lawngreen: `#7cfc00`,
  lemonchiffon: `#fffacd`,
  lightblue: `#add8e6`,
  lightcoral: `#f08080`,
  lightcyan: `#e0ffff`,
  lightgoldenrodyellow: `#fafad2`,
  lightgray: `#d3d3d3`,
  lightgreen: `#90ee90`,
  lightgrey: `#d3d3d3`,
  lightpink: `#ffb6c1`,
  lightsalmon: `#ffa07a`,
  lightseagreen: `#20b2aa`,
  lightskyblue: `#87cefa`,
  lightslategrey: `#778899`,
  lightsteelblue: `#b0c4de`,
  lightyellow: `#ffffe0`,
  lime: `#00ff00`,
  limegreen: `#32cd32`,
  linen: `#faf0e6`,
  magenta: `#ff00ff`,
  maroon: `#800000`,
  mediumaquamarine: `#66cdaa`,
  mediumblue: `#0000cd`,
  mediumorchid: `#ba55d3`,
  mediumpurple: `#9370db`,
  mediumseagreen: `#3cb371`,
  mediumslateblue: `#7b68ee`,
  mediumspringgreen: `#00fa9a`,
  mediumturquoise: `#48d1cc`,
  mediumvioletred: `#c71585`,
  midnightblue: `#191970`,
  mintcream: `#f5fffa`,
  mistyrose: `#ffe4e1`,
  moccasin: `#ffe4b5`,
  navajowhite: `#ffdead`,
  navy: `#000080`,
  oldlace: `#fdf5e6`,
  olive: `#808000`,
  olivedrab: `#6b8e23`,
  orange: `#ffa500`,
  orangered: `#ff4500`,
  orchid: `#da70d6`,
  palegoldenrod: `#eee8aa`,
  palegreen: `#98fb98`,
  paleturquoise: `#afeeee`,
  palevioletred: `#db7093`,
  papayawhip: `#ffefd5`,
  peachpuff: `#ffdab9`,
  peru: `#cd853f`,
  pink: `#ffc0cb`,
  plum: `#dda0dd`,
  powderblue: `#b0e0e6`,
  purple: `#800080`,
  rebeccapurple: `#663399`,
  red: `#ff0000`,
  rosybrown: `#bc8f8f`,
  royalblue: `#4169e1`,
  saddlebrown: `#8b4513`,
  salmon: `#fa8072`,
  sandybrown: `#f4a460`,
  seagreen: `#2e8b57`,
  seashell: `#fff5ee`,
  sienna: `#a0522d`,
  silver: `#c0c0c0`,
  skyblue: `#87ceeb`,
  slateblue: `#6a5acd`,
  slategray: `#708090`,
  snow: `#fffafa`,
  springgreen: `#00ff7f`,
  steelblue: `#4682b4`,
  tan: `#d2b48c`,
  teal: `#008080`,
  thistle: `#d8bfd8`,
  tomato: `#ff6347`,
  turquoise: `#40e0d0`,
  violet: `#ee82ee`,
  wheat: `#f5deb3`,
  white: `#ffffff`,
  whitesmoke: `#f5f5f5`,
  yellow: `#ffff00`,
  yellowgreen: `#9acd32`,
  transparent: 'transparent',
};

const kusuri = {
  backgroundSplash: '#FD51A7',
  backgroundRed: '#FF0000',
  backgroundGray: '#F2F3F5',

  backgroundButtonPatient: '#FB52A6',
  textButtonPatient: '#FEFEFF',
  borderButtonPatient: '#FB52A6',
  backgroundButtonPatient2: '#F0F4F5',
  textButtonPatient2: '#FB52A6',
  borderButtonPatient2: '#FB52A6',

  backgroundButtonPharma: '#4F8DF4',
  textButtonPharma: '#FDFFFE',
  borderButtonPharma: '#4F8DF4',
  backgroundButtonPharma2: '#F0F4F5',
  textButtonPharma2: '#4E8EF4',
  borderButtonPharma2: '#4F8DF4',
  // ตรงTabของสีชมพู依頼状況 : สีฟอนต์ #fd51a7 สี bg เทาๆ #f1f3f4
  // หัวข้อ お知らせ
  // ฝั่งชมพู #b13372  ฝั่งน้ำเงิน #001b72
  // ตัวอักษรสีเทา เนื้อหา お知らせ  #616161
  textButtonLink: '#4B4B4B',
  headerPatient: '#FB52A6',
  headerPharma: '#508DF4',
  textApp: '#616161',
  textIntro: '#616161',
  textRed: '#FF0000',
  textBlue: '#0000FF',
  textGray: '#616263',
  textWhite: '#FFFFFF',
  // textHeaderPatient: '#9D1E5E', not
  // textHeaderPharma: '#394886', not
  textHeaderPatient: '#b13372',
  textHeaderPharma: '#001b72',

  // backgroundSafe: '#ffaaaa', //'#eeeeee',
  // backgroundBg: '#aaffaa', //'#eeeeee',
  // backgroundApp: '#aaaaff',
  // backgroundApp2: '#ffffaa',
  backgroundSafe: '#F0F0F2',
  backgroundBg: '#FEFFFF',
  backgroundApp: '#FEFFFF',
  backgroundApp2: '#FEFFFF',
  backgroundComment: '#F0F0F2',

  // will not used
  // textButtonBlue: '#616263',
  // textButtonPatient: '#ffffff',
  // textButtonPharma: '#ffffff',
  patientDisableButton: '#bbbbbb',
  pharmaDisableButton: '#bbbbbb',

  // themePatient: '#FD51A7',
  // themePharma: '#6aa355',

  backgrounButtonGray: '#cccccc',
  textButtonGray: 'gray',
  // backgrounButtonDebug: 'teal',

  // backgroundButtonPatientPoint: '#ff0000',
  // backgroundButtonPatientStatusRed: 'red',
  // backgroundButtonPatientStatusBlue: 'blue',
  // backgroundButtonPatientStatusGreen: 'green',
};

const xxx = {
  pokemon,
  MINECRAFT,
  firebase,
  pokemongen,
  nsswitch,
  react,
  kusuri,
};

const yyy = {
  name: '#FFFFFF',
};

export default xxx;
export {xxx};
