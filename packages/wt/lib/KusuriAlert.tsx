import React, {useState, useEffect} from 'react';

import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import type {AwesomeAlertProps} from 'react-native-awesome-alerts'

import {LocalizationContext} from 'app/localization/Translations';
import R from 'res/R';


export {AlertProgress}
export {Alert1}
export {Alert2}

const AlertProgress = (props:AwesomeAlertProps) => {
  // const {style, defaultStyle = false} = props;
  // const {gray, debug, negative} = props;
  // const {disabled} = props;
  // const {onPress} = props;
  // var styleObj = StyleSheet.flatten([style]);
  return (
    <AwesomeAlert
      overlayStyle={{height: '100%'}}
      {...props}
      showProgress={true}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showCancelButton={false}
      showConfirmButton={false}
    />
  );
};
const Alert1 = (props:AwesomeAlertProps) => {
  const {title, message} = props;
  return (
    <AwesomeAlert
        overlayStyle={{height: '100%', width:'100%'}}
        // show={showPopup2}
        showProgress={false}
        // title={title}
        // message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        // cancelText={translations['popup.ok']}
        // confirmText={translations['popup.ok']}
        // confirmButtonColor="#DD6B55"
        confirmButtonColor={'#787878'}
        // onCancelPressed={() => {
        //   setShowPopup2(false)
        // }}
        onConfirmPressed={() => {
          if(props.onConfirmPressed) props.onConfirmPressed()
        }}
        onDismiss={() => {
          if(props.onConfirmPressed) props.onConfirmPressed()
        }}
        {...props}
      />
  );
};
const Alert2 = (props:AwesomeAlertProps) => {
  const {title, message} = props;
  return (
    <AwesomeAlert
        overlayStyle={{height: '100%'}}
        // show={showPopup2}
        showProgress={false}
        // title={translations['popup.2.title']}
        // message={translations['popup.2.text']}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        // cancelText={translations['popup.ok']}
        // confirmText={translations['popup.ok']}
        // confirmButtonColor="#DD6B55"
        confirmButtonColor={'#787878'}
        cancelButtonColor={'#787878'}
        onCancelPressed={() => {
          if(props.onCancelPressed) props.onCancelPressed()
        }}
        onConfirmPressed={() => {
          if(props.onConfirmPressed) props.onConfirmPressed()
        }}
        onDismiss={() => {
          if(props.onCancelPressed) props.onCancelPressed()
        }}
        {...props}
      />
  );
};

//2choice 1 5 8 9 10 14 15 16 17 18

export {AlertNoU01}//push
export {AlertNo2}
export {AlertNo3}
export {AlertNo4}
export {AlertNoU05}//location
export {AlertNo6}
export {AlertNo7}
export {AlertNoU08}//camera
export {AlertNoU09}//camera
export {AlertNoU10}
export {AlertNoU10x}
export {AlertNo11}
export {AlertNo12}
export {AlertNo13}
export {AlertNo14}
export {AlertNo15}
export {AlertNo16}
// export {AlertNo17}// use native capture image function
export {AlertNo18}
export {AlertNoU19}//point
export {AlertNoU20}//point
export {AlertNo21}
export {AlertNoU22}
export {AlertNoU23}
export {AlertNoU24}
export {AlertNoU25}
export {AlertNoU26}
export {AlertNoU27}
export {AlertNoU28}
export {AlertNoU29}
export {AlertNoU30}
export {AlertNoU31}
export {AlertNoU32}
export {AlertNoU33}

//2choice p 1 4 5 6 10 12 13 14 16 17 19 20
export {AlertNoP01}//push
export {AlertNoP2}
export {AlertNoP03}//
// export {AlertNoP4}//actionsheet
export {AlertNoP05}//camera
export {AlertNoP06}//camera
export {AlertNoP7}
export {AlertNoP8}
export {AlertNoP9}
export {AlertNoP10}
export {AlertNoP11}
export {AlertNoP12}
export {AlertNoP13}
export {AlertNoP14}
export {AlertNoP15}
export {AlertNoP16}
export {AlertNoP17}
export {AlertNoP18}
export {AlertNoP19}
export {AlertNoP20}
export {AlertNoP21}
export {AlertNoP22}
export {AlertNoP23}
export {AlertNoP24}
// export {AlertNoP25}same u27 reset password
// export {AlertNoP26}same u28 reset password
export {AlertNoP27}
export {AlertNoP28}

export {AlertNoZ01}
export {AlertNoZ02}
export {AlertNoZ03}
export {AlertNoZ04}
export {AlertNoZ05}
export {AlertNoZ99}

const AlertNoP01 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <AlertNoU01
      {...props}
    />
  );
};
const AlertNoP2 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <AlertNo2
      {...props}
    />
  );
};
const AlertNoP03 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p3.title']}
      message={translations['popup.p3.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP4 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p4.title']}
      message={translations['popup.p4.text']}
      cancelText={translations['popup.camera']}
      confirmText={translations['popup.roll']}
      {...props}
    />
  );
};
const AlertNoP05 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p5.title']}
      message={translations['popup.p5.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
      />
  );
};
const AlertNoP06 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p6.title']}
      message={translations['popup.p6.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP7 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p7.title']}
      message={translations['popup.p7.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP8 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p8.title']}
      message={translations['popup.p8.text']}
      cancelText={translations['popup.cancel']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP9 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p9.title']}
      message={translations['popup.p9.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP10 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p10.title']}
      message={translations['popup.p10.text']}
      cancelText={translations['popup.cancel']}
      confirmText={translations['popup.back']}
      {...props}
    />
  );
};
const AlertNoP11 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p11.title']}
      message={translations['popup.p11.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP12 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p12.title']}
      message={translations['popup.p12.text']}
      cancelText={translations['popup.cancel']}
      confirmText={translations['']}
      {...props}
    />
  );
};
const AlertNoP13 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p13.title']}
      message={translations['popup.p13.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP14 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p14.title']}
      message={translations['popup.p14.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP15 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p15.title']}
      message={translations['popup.p15.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP16 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p16.title']}
      message={translations['popup.p16.text']}
      cancelText={props.date+translations['popup.calen1']}
      confirmText={translations['popup.cancel']}
      {...props}
    />
  );
};
const AlertNoP17 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p17.title']}
      message={translations['popup.p17.text']}
      cancelText={props.date+translations['popup.calen2']}
      confirmText={translations['popup.cancel']}
      {...props}
    />
  );
};
const AlertNoP18 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p18.title']}
      message={translations['popup.p18.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP19 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <AlertNo16
      {...props}
    />
  );
};
const AlertNoP20 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <AlertNo18
      {...props}
    />
  );
};
const AlertNoP21 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p21.title']}
      message={translations['popup.p21.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP22 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p22.title']}
      message={translations['popup.p22.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP23 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p23.title']}
      message={translations['popup.p23.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP24 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p24.title']}
      message={translations['popup.p24.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP27 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.p27.title']}
      message={translations['popup.p27.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoP28 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.p28.title']}
      message={translations['popup.p28.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoZ01 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.pz01.title']}
      message={translations['popup.pz01.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoZ02 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.pz02.title']}
      message={translations['popup.pz02.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoZ03 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.pz03.title']}
      message={translations['popup.pz03.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoZ04 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['calendar.popup.text']}
      // message={translations['popup.pz03.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoZ05 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.z05.text']}
      // message={translations['popup.pz03.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoZ99 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.z99invalidlogin.text']}
      // message={translations['popup.pz03.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};


const AlertNoU01 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.1.title']}
      message={translations['popup.1.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.allow']}
      {...props}
    />
  );
};
const AlertNo2 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.2.title']}
      message={translations['popup.2.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo3 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.3.title']}
      message={translations['popup.3.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo4 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.4.title']}
      message={translations['popup.4.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU05 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.5.title']}
      message={translations['popup.5.text']}
      cancelText={translations['popup.allowonce']}
      confirmText={translations['popup.allowapp']}
      {...props}
      />
  );
};
const AlertNo6 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.6.title']}
      message={translations['popup.6.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo7 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.7.title']}
      message={translations['popup.7.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU08 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.8.title']}
      message={translations['popup.8.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU09 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.9.title']}
      message={translations['popup.9.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU10 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.10.title']}
      message={translations['popup.10.text']}
      // cancelText={translations['popup.nextimage']}
      // confirmText={translations['popup.finish']}
      cancelText={translations['popup.finish']}
      confirmText={translations['popup.nextimage']}
      {...props}
    />
  );
};
const AlertNoU10x = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.10.title']}
      message={translations['popup.10.text']}
      confirmText={translations['popup.mustimage']}
      {...props}
    />
  );
};
const AlertNo11 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.11.title']}
      message={translations['popup.11.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo12 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.12.title']}
      message={translations['popup.12.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo13 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.13.title']}
      message={translations['popup.13.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo14 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.14.title']}
      message={translations['popup.14.text']}
      cancelText={translations['popup.no']}
      confirmText={translations['popup.dis']}
      {...props}
    />
  );
};
const AlertNo15 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.15.title']}
      message={translations['popup.15.text']}
      cancelText={translations['popup.no']}
      confirmText={translations['popup.select']}
      {...props}
    />
  );
};
const AlertNo16 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.16.title']}
      message={translations['popup.16.text']}
      cancelText={translations['popup.notallow']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo17 = (props:AwesomeAlertProps, code:string) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.17.title']+'  '+code}
      message={translations['popup.17.text']}
      cancelText={translations['popup.cap']}
      confirmText={translations['popup.close']}
      {...props}
    />
  );
};
const AlertNo18 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.18.title']}
      message={translations['popup.18.text']}
      cancelText={translations['popup.notupdate']}
      confirmText={translations['popup.update']}
      {...props}
    />
  );
};
const AlertNoU19 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.19.title']}
      message={translations['popup.19.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU20 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.20.title']}
      message={translations['popup.20.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNo21 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.21.title']}
      message={translations['popup.21.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU22 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u22.title']}
      message={translations['popup.u22.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU23 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u23.title']}
      message={translations['popup.u23.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU24 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u24.title']}
      message={translations['popup.u24.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU25 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u25.title']}
      message={translations['popup.u25.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU26 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u26.title']}
      message={translations['popup.u26.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU27 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u27.title']}
      message={translations['popup.u27.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU28 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u28.title']}
      message={translations['popup.u28.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU29 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u29.title']}
      message={translations['popup.u29.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU30 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u30.title']}
      message={translations['popup.u30.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU31 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      title={translations['popup.u31.title']}
      message={translations['popup.u31.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU32 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert1
      closeOnTouchOutside={false}
      title={translations['popup.u32.title']}
      message={translations['popup.u32.text']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};
const AlertNoU33 = (props:AwesomeAlertProps) => {
  const {translations} = React.useContext(LocalizationContext);
  return (
    <Alert2
      title={translations['popup.u33.title']}
      message={translations['popup.u33.text']}
      cancelText={translations['popup.cancel']}
      confirmText={translations['popup.ok']}
      {...props}
    />
  );
};

// const KusuriPatientButton = props => {
//   const {style, defaultStyle = false} = props;
//   const {title} = props;
//   const {gray, debug, negative} = props;
//   const {disabled} = props;
//   const {onPress} = props;
//   var styleObj = StyleSheet.flatten([style]);
//   return (
//     <TouchableOpacity
//       style={{
//         ...styles.button,
//         backgroundColor: gray
//           ? R.colors.kusuri.backgrounButtonGray
//           : negative
//           ? R.colors.kusuri.backgroundButtonPatient2
//           : R.colors.kusuri.backgroundButtonPatient,
//         borderColor: negative
//           ? R.colors.kusuri.borderButtonPatient2
//           : R.colors.kusuri.borderButtonPatient,
//         borderWidth: 1,
//         ...style,
//       }}
//       disabled={disabled}
//       onPress={onPress}>
//       <Text
//         style={{
//           ...styles.text,
//           color: negative
//             ? R.colors.kusuri.textButtonPatient2
//             : R.colors.kusuri.textButtonPatient,
//           ...{fontSize: styleObj.fontSize ?? R.fonts.Medium},
//         }}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
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
    alignItems: 'center',
    backgroundColor: '#f05555',
    color: '#ffffff',
    padding: 10,
    // marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    borderRadius: 3,
  },
  text: {
    color: '#ffffff',
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