import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  Dimensions,
  StyleSheetProperties,
  Linking
} from 'react-native';
import R from 'res/R';
import KusuriText from 'app/ponent/KusuriText'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {LocalizationContext} from 'app/localization/Translations';
import { MyButton2 } from './WTButton';
import { AlertNoU33 } from './KusuriAlert';
import APIShared from 'app/model/APIShared';

const KusuriPatientButton = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {gray, debug, negative} = props;
  const {disabled} = props;
  const {onPress} = props;
  const {adjustsFontSizeToFit} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: gray
          ? R.colors.kusuri.backgrounButtonGray
          : negative
          ? R.colors.kusuri.backgroundButtonPatient2
          : R.colors.kusuri.backgroundButtonPatient,
        borderColor: negative
          ? R.colors.kusuri.borderButtonPatient2
          : R.colors.kusuri.borderButtonPatient,
        borderWidth: 2,
        shadowOffset: {width:2,height:2},
        shadowRadius: 2,
        shadowOpacity: 0.3,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={adjustsFontSizeToFit?1:undefined}
        style={{
          ...styles.text,
          color: negative
            ? R.colors.kusuri.textButtonPatient2
            : R.colors.kusuri.textButtonPatient,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};

const KusuriPharmaButton = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {gray, debug, negative} = props;
  const {disabled} = props;
  const {onPress} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: gray
          ? 'lightgray'
          : negative
          ? R.colors.kusuri.backgroundButtonPharma2
          : R.colors.kusuri.backgroundButtonPharma,
        borderColor: gray
          ? 'gray'
          : negative
          ? R.colors.kusuri.borderButtonPharma2
          : R.colors.kusuri.borderButtonPharma,
        borderWidth: 1,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: negative
            ? R.colors.kusuri.textButtonPharma2
            : R.colors.kusuri.textButtonPharma,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};

const DebugButton = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {gray, debug, negative} = props;
  const {disabled} = props;
  const {onPress} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: R.colors.kusuri.backgrounButtonDebug,
        borderColor: R.colors.kusuri.backgrounButtonDebug,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: negative
            ? R.colors.kusuri.textButtonPharma2
            : R.colors.kusuri.textButtonPharma,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};

const LinkButton = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {onPress} = props;
  const {gray} = props;
  const {disabled} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: 'transparent',
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
        text={title}
        style={{
          ...styles.text,
          color: R.colors.kusuri.textButtonLink,
          textDecorationLine: 'underline',
          ...{fontSize: styleObj.fontSize ?? 20},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};

const LinkButtonBlue = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {onPress} = props;
  const {gray} = props;
  const {disabled} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: 'transparent',
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
        text={title}
        style={{
          ...styles.text,
          color: '#78A1F5',
          textDecorationLine: 'underline',
          ...{fontSize: styleObj.fontSize ?? 20},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};

const LinkButtonBold = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {onPress} = props;
  const {gray} = props;
  const {disabled} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: 'transparent',
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
        text={title}
        style={{
          ...styles.text,
          color: R.colors.kusuri.textButtonLink,
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          // fontFamily: 'Meiryo-Bold',
          ...{fontSize: styleObj.fontSize ?? 20},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};

const LinkButtonMap = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {onPress} = props;
  const {gray} = props;
  const {disabled} = props;
  const {name, lat, lng} = props;
  const {pharmacy_id} = props;
  const haveLocation = (lat&&lng) || pharmacy_id 
  var styleObj = StyleSheet.flatten([style]);
  const [showPopup2, setShowPopup2] = React.useState(false)
  const [shopLocation, setShopLocation] = React.useState({lat:lat, lng:lng})
  async function openMap(latitude?:string, longitude?:string) {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${latitude},${longitude}`;
        const url = Platform.select({
          ios: `${scheme}${name}@${latLng}`,
          android: `${scheme}${latLng}(${name})`,
          default:''
        });
        const canOpen = await Linking.canOpenURL(url);
        if (canOpen) {
          Linking.openURL(url);
        }
  };
  async function getShopLocation(id:string) {
    let request = {id:id}
    let response = await APIShared.getInstance().User().pharmacy_info(request)
    if (response) {
      setShopLocation({lat:response.shop_latitude , lng:response.shop_longitude})
      openMap(response.shop_latitude, response.shop_longitude)
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: 'transparent',
        alignItems: 'flex-start', 
        ...style,
      }}
      disabled={!haveLocation}
      onPress={()=>{
        setShowPopup2(true)
      }}>
    
    <AlertNoU33 show={showPopup2}
      onConfirmPressed={() => {
        setShowPopup2(false)
        if (shopLocation.lat&&shopLocation.lng) {
          openMap(shopLocation.lat, shopLocation.lng)
        } else {
          getShopLocation(pharmacy_id)
        }
      }}
      onCancelPressed={() => {
        setShowPopup2(false)
      }}
    />
    {haveLocation?
      <KusuriText
      text={title}
      style={{
        ...styles.text,
        color: '#78A1F5',
        textDecorationLine: 'underline',
        ...{fontSize: styleObj.fontSize ?? 20},
      }}>
      </KusuriText>
      : 
      <KusuriText
      text={title}
      style={{
        ...{fontSize: styleObj.fontSize ?? 20},
      }}>
      </KusuriText>
    }
    </TouchableOpacity>
  );
};

const ClearButton = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {onPress} = props;
  const {gray} = props;
  const {disabled} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: 'transparent',
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
        text={title}
        style={{
          ...styles.text,
          color: R.colors.kusuri.textButtonGray,
          ...{fontSize: styleObj.fontSize ?? 20},
        }}>
      </KusuriText>
    </TouchableOpacity>
  );
};



interface PropsBar {
  patientback?: boolean,
  patientmenu?: boolean,
  patientall?: boolean,
  pharmaback?: boolean,
  pharmamenu?: boolean,
  pharmacalendar?: boolean,
  rightt?:boolean,
  exclamation?:boolean,

  defaultStyle?: boolean;
  onPress?: any;
  style?: StyleSheet;
}
export function KusuriBarButton (props:PropsBar) {
  // var styleObj = StyleSheet.flatten([props.style]);
  // const insets = useSafeAreaInsets();
  // var {height=0} = props
  let image = props.patientmenu ? R.images.images_patient_btn_sidemenu
  : props.patientall ? R.images.images_patient_btn_all_jp
  : props.patientback ? R.images.images_patient_btn_back
  : props.pharmamenu ? R.images.images_pharma_btn_sidemenu_shop
  : props.pharmacalendar ? R.images.images_pharma_btn_calendar
  : props.pharmaback ? R.images.images_pharma_btn_back_shop
  : R.images.images_patient_btn_back
  let barpadding = Dimensions.get('window').width*20/428
  const isAndroid = Platform.OS === 'android';

  return (

    <View 
    style={{ flex:0, alignItems:'flex-start',
    ...props.rightt 
    ? {paddingRight:barpadding}
    : {paddingLeft:barpadding}, 
    height: 44 }}
    {...props}
    >
    <View 
    style={{ flex:0, 
      // alignItems:'flex-start',
    // ...props.right 
    // ? {paddingRight:barpadding}
    // : {paddingLeft:barpadding}, 
    // height: 44,
    aspectRatio:1, }}
    {...props}
    >
    <MyButton2
      image={image}
      customClick={props.onPress}
      style={{ aspectRatio:1, }}
    >
    </MyButton2>

{props.exclamation && <View style={{
  position:'absolute',
    borderRadius:40,
    alignSelf:'center',
    right:-44*0.6*0.45,
    top:-44*0.6*0.45,
    // right:barpadding*0.5,
    height:'60%',
    aspectRatio:1,
    backgroundColor:'red',
    justifyContent:'center',
    // opacity: badge > 0 ? 1 : 0
    }}>
    <KusuriText
      text={'!'}
      style={{
        ...styles.text,
        alignSelf:'center',
        borderRadius:20,
        // textAlignVertical:'center',
        fontWeight:'bold',
        color: 'white',
        ...{ fontSize:R.fonts.Medium},
      }}
    />
    </View>
}
    </View>
  </View>
  )
}


interface PropsStat {
  neworder?: boolean;
  noorder?: boolean;
  replied?: boolean;
  end?: boolean;
  cancel?: boolean;
  first?: boolean;
  defaultStyle?: boolean;
  onPress?: any;
  style?: StyleSheet;
}

const KusuriStatusButton = props => {
  // const {style, defaultStyle = false} = props;
  // const {title} = props;
  // const {gray, debug, negative} = props;
  // const {disabled} = props;
  // const {onPress} = props;
  // var styleObj = StyleSheet.flatten([style]);
    const {style, defaultStyle = false} = props;
    const {title} = props;
    const {gray, red, negative=true} = props;
    const {disabled} = props;
    const {onPress} = props;
    var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        // ...styles.button,
        // backgroundColor: gray
        //   ? 'lightgray'
        //   : negative
        //   ? R.colors.kusuri.backgroundButtonPharma2
        //   : R.colors.kusuri.backgroundButtonPharma,
        // borderColor: gray
        //   ? 'gray'
        //   : negative
        //   ? R.colors.kusuri.borderButtonPharma2
        //   : R.colors.kusuri.borderButtonPharma,
        // borderWidth: 1,
        ...style,
      }}
      disabled={disabled}
      onLongPress={onPress}>
      {/* <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: negative
            ? R.colors.kusuri.textButtonPharma2
            : R.colors.kusuri.textButtonPharma,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText> */}

    <View
      style={{
        ...styles.button,
        backgroundColor: gray ? R.colors.kusuri.textWhite 
                              : red ? R.colors.kusuri.textWhite
                                         : R.colors.kusuri.textWhite,
        borderColor: gray ? R.colors.kusuri.textGray
        : red ? R.colors.kusuri.textRed 
              : R.colors.kusuri.textGray,
        borderWidth: 2,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: gray ? R.colors.kusuri.textGray
                      : red ? R.colors.kusuri.textRed 
                            : R.colors.kusuri.textGray,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </View>
    </TouchableOpacity>
  );
};
const KusuriStatusButtona = props => {
  const {style, defaultStyle = false} = props;
  const {title} = props;
  const {gray, red, negative=true} = props;
  const {disabled} = props;
  const {onPress} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: gray ? R.colors.kusuri.textWhite 
                              : red ? R.colors.kusuri.textWhite
                                         : R.colors.kusuri.textWhite,
        borderColor: gray ? R.colors.kusuri.textGray
        : red ? R.colors.kusuri.textRed 
              : R.colors.kusuri.textButtonPatient,
        borderWidth: 2,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: gray ? R.colors.kusuri.textGray
                      : red ? R.colors.kusuri.textRed 
                            : R.colors.kusuri.textButtonPatient,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </View>
  );
};
const KusuriTaskButton = props => {
  // const {style, defaultStyle = false} = props;
  // const {title} = props;
  // const {gray, debug, negative} = props;
  // const {disabled} = props;
  // const {onPress} = props;
  // var styleObj = StyleSheet.flatten([style]);
    const {style, defaultStyle = false} = props;
    const {title} = props;
    const {gray, red, negative=true} = props;
    const {disabled} = props;
    const {onPress} = props;
    var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        // ...styles.button,
        // backgroundColor: gray
        //   ? 'lightgray'
        //   : negative
        //   ? R.colors.kusuri.backgroundButtonPharma2
        //   : R.colors.kusuri.backgroundButtonPharma,
        // borderColor: gray
        //   ? 'gray'
        //   : negative
        //   ? R.colors.kusuri.borderButtonPharma2
        //   : R.colors.kusuri.borderButtonPharma,
        // borderWidth: 1,
        ...style,
      }}
      disabled={disabled}
      onLongPress={onPress}>
      {/* <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: negative
            ? R.colors.kusuri.textButtonPharma2
            : R.colors.kusuri.textButtonPharma,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText> */}

    <View
      style={{
        ...styles.button,
        backgroundColor: gray ? R.colors.kusuri.textWhite 
                              : red ? R.colors.kusuri.textWhite
                                         : R.colors.kusuri.textWhite,
        borderColor: gray ? R.colors.kusuri.textGray
        : red ? R.colors.kusuri.textRed 
              : R.colors.kusuri.textButtonPatient,
        borderWidth: 2,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: gray ? R.colors.kusuri.textGray
                      : red ? R.colors.kusuri.textRed 
                            : R.colors.kusuri.textButtonPatient,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </View>
    </TouchableOpacity>
  );
};
const KusuriPointButton = props => {
  // const {style, defaultStyle = false} = props;
  // const {title} = props;
  // const {gray, debug, negative} = props;
  // const {disabled} = props;
  // const {onPress} = props;
  // var styleObj = StyleSheet.flatten([style]);
    const {style, defaultStyle = false} = props;
    const {title} = props;
    const {gray, red, negative=true} = props;
    const {disabled} = props;
    const {onPress} = props;
    var styleObj = StyleSheet.flatten([style]);
  return (
    <TouchableOpacity
      style={{
        // ...styles.button,
        // backgroundColor: gray
        //   ? 'lightgray'
        //   : negative
        //   ? R.colors.kusuri.backgroundButtonPharma2
        //   : R.colors.kusuri.backgroundButtonPharma,
        // borderColor: gray
        //   ? 'gray'
        //   : negative
        //   ? R.colors.kusuri.borderButtonPharma2
        //   : R.colors.kusuri.borderButtonPharma,
        // borderWidth: 1,
        ...style,
      }}
      disabled={disabled}
      onLongPress={onPress}>
      {/* <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: negative
            ? R.colors.kusuri.textButtonPharma2
            : R.colors.kusuri.textButtonPharma,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText> */}

    <View
      style={{
        ...styles.button,
        backgroundColor: gray ? R.colors.kusuri.textWhite 
                              : red ? R.colors.kusuri.textWhite
                                         : R.colors.kusuri.textWhite,
        borderColor: gray ? R.colors.kusuri.textGray
        : red ? R.colors.kusuri.textRed 
              : R.colors.kusuri.textButtonPatient,
        borderWidth: 2,
        ...style,
      }}
      disabled={disabled}
      onPress={onPress}>
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: gray ? R.colors.kusuri.textGray
                      : red ? R.colors.kusuri.textRed 
                            : R.colors.kusuri.textButtonPatient,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </View>
    </TouchableOpacity>
  );
};
const KusuriWorkButton = (props:PropsStat) => {
  // const {style, defaultStyle = false} = props;
  // const {title} = props;
  // const {gray, debug, negative} = props;
  // const {disabled} = props;
  // const {onPress} = props;
  // var styleObj = StyleSheet.flatten([style]);
    const {style, defaultStyle = false} = props;
    // const {title} = props;
    // const {gray, red, negative=true} = props;
    // const {disabled} = props;
    const {onPress} = props;
    const {end, cancel, first, neworder,} = props;
    var styleObj = StyleSheet.flatten([style]);
    const {translations} = React.useContext(LocalizationContext);
    let red = true;
    let green = true;
    let gray = true;

  return (
    <TouchableOpacity
      style={{
        ...style,
      }}
      disabled={disabled}
      onLongPress={onPress}>

    <View
      style={{
        ...styles.button,
        backgroundColor: gray ? R.colors.kusuri.textWhite 
                              : red ? R.colors.kusuri.textWhite
                                         : R.colors.kusuri.textWhite,
        borderColor: gray ? R.colors.kusuri.textGray
        : red ? R.colors.kusuri.textRed 
              : R.colors.kusuri.textButtonPatient,
        borderWidth: 2,
        ...style,
      }}
      >
      <KusuriText
      text={title}
        style={{
          ...styles.text,
          color: gray ? R.colors.kusuri.textGray
                      : red ? R.colors.kusuri.textRed 
                            : R.colors.kusuri.textButtonPatient,
          ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
        }}>
      </KusuriText>
    </View>
    </TouchableOpacity>
  );
};


const KusuriImageButton = props => {
  const [isShowingText, setIsShowingText] = useState(true);
  const {image} = props;
  const handleBackgroundImg = (imageBg, backgroundImage) => {
    if (imageBg === true) {
      return (
        <ImageBackground
          imageStyle={styles.bg}
          style={styles.bg}
          source={backgroundImage}
          resizeMode={'center'}
        />
      );
    }
    return <Image />;
  };

  if (!isShowingText) {
    return null;
  }
  return (
    <View style={{...styles.container, ...props.style}}>
      {/* {handleBackgroundImg(true, props.image)} */}
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        onPress={props.customClick}>
      <View style={{justifyContent:'center', alignSelf:'center',
      position:'absolute',
      flex:1,width:'100%', height:'100%'}}>
        <Image
          resizeMode={'contain'}
          // imageStyle={styles.bg}
          style={{ alignSelf:'center' ,width:'50%', height:'50%'}}
          source={R.images.images_pharma_icon}
        />
      </View>
        <Image 
          resizeMode={'cover'}
          style={{ flex: 1, }} 
          source={image} />
      </TouchableOpacity>
    </View>
  );
};
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const KusuriCloseButton = props => {
  const [isShowingText, setIsShowingText] = useState(true);
  const {style, defaultStyle = true} = props;
  const {onPress} = props;
  const {color} = props;
  const insets = useSafeAreaInsets();
  const {circle = false} = props;
  var styleObj = StyleSheet.flatten([style]);
  return (
    <View 
      style={{ 
        position: 'absolute',
        ...defaultStyle ? { 
          left: 20,
          top: insets.top==0
          ? 40
          : insets.top+10} 
        : {},
        ...styleObj,
      }}>
      <TouchableOpacity 
        style={{ 
          alignSelf:'flex-start', 
          ...circle 
          ? {
            marginBottom: 15,
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            backgroundColor: 'rgba(140, 140, 140, 0.3)',
            justifyContent: 'center',
            alignItems: 'center', 
          } 
          : {}
        }}
        onPress={onPress}
      >
        <FontIcon name="close" color={color??"black"} size={24} />
      </TouchableOpacity>
        </View>
    // <View style={{...styles.container, ...props.style}}>
    //   {/* {handleBackgroundImg(true, props.image)} */}
    //   <TouchableOpacity
    //     style={styles.container}
    //     activeOpacity={0.7}
    //     onPress={props.customClick}>
    //   <View style={{justifyContent:'center', alignSelf:'center',
    //   position:'absolute',
    //   flex:1,width:'100%', height:'100%'}}>
    //     <Image
    //       resizeMode={'contain'}
    //       // imageStyle={styles.bg}
    //       style={{ alignSelf:'center' ,width:'50%', height:'50%'}}
    //       source={R.images.images_pharma_icon}
    //     />
    //   </View>
    //     <Image 
    //       resizeMode={'cover'}
    //       style={{ flex: 1, }} 
    //       source={image} />
    //   </TouchableOpacity>
    // </View>
  );
};

const MyButton4 = props => {
  const {style, defaultStyle = false} = props;
  return (
    <TouchableOpacity
      style={{...(defaultStyle ? styles.button : {}), ...style}}
      // style={{...styles.button, ...style}}
      onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  desc: {
    /* 
      flex: 1, // require parent to have width, height, flex
      flex will define how your items are going to “fill” over the available space along your main axis. 
       Space will be divided according to each element's flex property. */
    /* 
      flexDirection: 'column', //column,row,column-reverse,row-reverse
      flexDirection controls the direction in which the children of a node are laid out. 
       This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or 
       the axis which the wrapping lines are laid out in. */
    /* 
      layoutDirection: 'LTR', //LTR,RTL
      Layout direction specifies the direction in which children and text in a hierarchy should be laid out. */
    /* 
      justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
      justifyContent describes how to align children within the main axis of their container. 
       For example, you can use this property to center a child horizontally within a container 
       with flexDirection set to row or vertically within a container with flexDirection set to column. */
    /* 
      alignItems: 'stretch', //stretch,flex-start,flex-end,center,baseline
      alignItems describes how to align children along the cross axis of their container. 
       Align items is very similar to justifyContent but instead of applying to the main axis, 
       alignItems applies to the cross axis. */
    /* 
      alignSelf: 'stretch', //stretch,flex-start,flex-end,center,baseline
      alignSelf has the same options and effect as alignItems but instead of affecting the children within a container, 
       you can apply this property to a single child to change its alignment within its parent. 
       alignSelf overrides any option set by the parent with alignItems. */
    /* 
      alignContent: 'flex-start', //flex-start,flex-end,stretch,center,space-between,space-around
      alignContent defines the distribution of lines along the cross-axis. 
       This only has effect when items are wrapped to multiple lines using flexWrap. */
    /* 
      flexWrap: '', //nowrap, wrap
      The flexWrap property is set on containers and it controls what happens when children overflow the size of 
       the container along the main axis. By default, children are forced into a single line (which can shrink elements). 
       If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed. */
    /* 
      flexBasis: 1,
      flexBasis is an axis-independent way of providing the default size of an item along the main axis. 
       Setting the flexBasis of a child is similar to setting the width of that child if its parent is a container 
       with flexDirection: row or setting the height of a child if its parent is a container with flexDirection: column. 
       The flexBasis of an item is the default size of that item, the size of the item before any flexGrow and flexShrink 
       calculations are performed. */
    /*
      flexGrow: 1,
      flexGrow describes how any space within a container should be distributed among its children along the main axis. 
       After laying out its children, a container will distribute any remaining space according to the flex grow values 
       specified by its children.
       flexGrow accepts any floating point value >= 0, with 0 being the default value. 
       A container will distribute any remaining space among its children weighted by the children’s flexGrow values. */
    /*  
      flexShrink: 1,
      flexShrink describes how to shrink children along the main axis in the case in which the total size of the children 
      overflows the size of the container on the main axis. flexShrink is very similar to flexGrow and can be thought of 
      in the same way if any overflowing size is considered to be negative remaining space. These two properties also work 
      well together by allowing children to grow and shrink as needed.
       flexShrink accepts any floating point value >= 0, with 0 being the default value (on the web, the default is 1). 
       A container will shrink its children weighted by the children’s flexShrink values. */
    // width: '100%', //auto,pixels,percentage
    // height: '100%', //auto,pixels,percentage
    // position: 'relative', //relative,absolute
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // padding: 0,
    // aspectRatio: 0.5,
    // backgroundColor: 'red',
  },
  template: {
    // flex: 1,
    // flexDirection: 'column', //column,row,column-reverse,row-reverse
    // layoutDirection: 'LTR', //LTR,RTL
    // justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
    // alignItems: 'stretch', //stretch,flex-start,flex-end,center,baseline
    // alignSelf: 'stretch',
    // alignContent: 'flex-start', //flex-start,flex-end,stretch,center,space-between,space-around
    // flexWrap: '', //nowrap, wrap
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 1,
    // width: '100%', //auto,pixels,percentage
    // height: '100%', //auto,pixels,percentage
    // position: 'relative', //relative,absolute
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // padding: 0,
    // aspectRatio: 0.5,
    // backgroundColor: 'red',
  },
  templateParent: {
    flex: 1, // require parent to have width, height, flex
    flexDirection: 'column', //column,row,column-reverse,row-reverse
    justifyContent: 'flex-start', //flex-start,flex-end,center,space-between,space-around,space-evenly
    alignItems: 'stretch', //stretch,flex-start,flex-end,center,baseline
    flexBasis: 1,
    flexGrow: 1, // 0>=0
    flexShrink: 1, // 0>=0
  },
  templateChildren: {
    flex: 1, // require parent to have width, height, flex
    alignSelf: 'stretch', //stretch,flex-start,flex-end,center,baseline
    flexBasis: 1,
    flexGrow: 1, // 0>=0
    flexShrink: 1, // 0>=0
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#f05555',
    color: '#ffffff',
    // padding: 13,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    borderRadius: 3,
  },
  text: {
    color: '#ffffff', 
    // justifyContent: 'center',
    // alignSelf: 'center',
    // alignItems:"center",
    // textAlign:'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  bg: {
    // flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // height: '100%',
    // width: '100%'
    // opacity: 0.3
  },
  image: {
    flex: 1, // require parent to have width, height, flex
    alignSelf: 'center', //stretch,flex-start,flex-end,center,baseline
    flexBasis: 1,
    flexGrow: 1, // 0>=0
    flexShrink: 1, // 0>=0
    resizeMode: 'contain',
    width: '100%',
  },
});

export default KusuriPatientButton;
export {KusuriPatientButton};
export {KusuriPharmaButton};
export {LinkButton};
export {ClearButton};
export {LinkButtonBold};
export {LinkButtonBlue};
export {LinkButtonMap};
export {KusuriStatusButton};
export {KusuriTaskButton};
export {KusuriPointButton};
export {KusuriWorkButton};
export {KusuriImageButton};
export {KusuriCloseButton};
