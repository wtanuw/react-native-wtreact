import React from 'react';
import {TextInput, StyleSheet, TextStyle, TextInputProps, View, useColorScheme} from 'react-native';
import R from 'app/resource/R'
import {isIOS} from 'app/Setting'


interface Props extends TextInputProps {
  text?: string,
  style?: TextStyle,
  defaultStyle?: boolean,
  innerRef?: any
}

const KusuriTextInView = (props:Props) => {
  const {text, innerRef, style, defaultStyle = true} = props;

  return (
    <View style={{
      ...(defaultStyle && {flexDirection:'row', width:100,backgroundColor:'red'}), 
      ...(!defaultStyle && style) 
    }}
    {...props}
    onStartShouldSetResponderCapture={
    isIOS
    ? ({ nativeEvent }) => {
      return true
    }
    : undefined
    }
      
    />
  );
};

const KusuriTextInput = (props:Props) => {
  const {text, innerRef, style, defaultStyle = true} = props;
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TextInput 
    ref={innerRef}
    keyboardType='default'
    placeholderTextColor={'#A8A7A9'} 
    returnKeyType={'done'}
      {...props}
      style={{ 
        ...(defaultStyle && styles.textField), 
        ...style,
        // ...isDarkMode?{color:'black'}:{},
        fontSize: 20,
        // paddingLeft:10,
        paddingHorizontal:10,
        textAlignVertical:'top',
      }}
      
    />
  );
};

const styles = StyleSheet.create({
  text: {
    // color: '#111825',
    // fontSize: 18,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    color:R.colors.kusuri.textApp,
  },
  textField: {
    flex: 1,
    backgroundColor: R.colors.kusuri.backgroundGray, 
    justifyContent: 'center', 
    // width: '100%',
    // margin: 20, 
    marginVertical: 10,
    height: 50,
    borderWidth:1,
    borderRadius:5,
    borderColor: '#AFAFB1',
  },
});

export default KusuriTextInput;
export {KusuriTextInput};
export {KusuriTextInView};
