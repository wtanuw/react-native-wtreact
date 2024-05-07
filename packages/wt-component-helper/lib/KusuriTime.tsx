import { StyleSheet } from 'react-native'
import {timeDesc, ObjTimeToString,} from 'app/Setting'
import KusuriText from 'app/ponent/KusuriText'
import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import R from 'app/resource/R'
import {isDEBUG, SmartJSONTimeToString, StringTimeToObject} from 'app/Setting'
import {LocalizationContext} from 'app/localization/Translations';

export function checkAll5(
  time1:string|undefined, time2:string|undefined, 
  time3:string|undefined, time4:string|undefined,
  setError1:React.Dispatch<React.SetStateAction<boolean>>, setError2:React.Dispatch<React.SetStateAction<boolean>>,
  setError3:React.Dispatch<React.SetStateAction<boolean>>, setError4:React.Dispatch<React.SetStateAction<boolean>>
  ) {
    let a = check1(time1, time2, setError1, setError2) ? 0 : 1
    let b = check2(time1, time2, setError1, setError2) ? 0 : 2
    let c = check3(time2, time3, setError2, setError3) ? 0 : 4
    let d = check4(time3, time4, setError3, setError4) ? 0 : 8
    let e = check5(time3, time4, setError3, setError4) ? 0 : 16
    return a+b+c+d+e
  }
  function check1(time1:string|undefined, time2:string|undefined, 
    setError1:React.Dispatch<React.SetStateAction<boolean>>, setError2:React.Dispatch<React.SetStateAction<boolean>>) {
    if (!timeDesc(time1, time2)) {
      if (!time1) { setError1(true); return false;}
      if (!time2) { setError2(true); return false;}
    }
    return true
  }
  function check2(time1:string|undefined, time2:string|undefined,
    setError1:React.Dispatch<React.SetStateAction<boolean>>, setError2:React.Dispatch<React.SetStateAction<boolean>>) {
    if (!timeDesc(time1, time2)) {
      if (time1 && time2) {
        setError1(true);
        setError2(true);
        return false;
      }
    }
    return true
  }
  function check3(time2:string|undefined, time3:string|undefined,
    setError2:React.Dispatch<React.SetStateAction<boolean>>, setError3:React.Dispatch<React.SetStateAction<boolean>>) {
    if ((time2&&time3) && !timeDesc(time2, time3)) {
      setError2(true);
      setError3(true);
      return false;
    }
    return true
  }
  function check4(time3:string|undefined, time4:string|undefined,
    setError3:React.Dispatch<React.SetStateAction<boolean>>, setError4:React.Dispatch<React.SetStateAction<boolean>>) {
      if (!timeDesc(time3, time4)) {
        if (!time3) { setError3(true); return false}
        if (!time4) { setError4(true); return false}
      }
      return true
  }
  function check5(time3:string|undefined, time4:string|undefined,
    setError3:React.Dispatch<React.SetStateAction<boolean>>, setError4:React.Dispatch<React.SetStateAction<boolean>>) {
      if (!timeDesc(time3, time4)) {
        if (time3 && time4) {
          setError3(true);
          setError4(true);
          return false;
        }
      }
      return true
  }


  type TimeInput2Props = {
    label1: string,
    label3: string,
    time1?: string,
    time2?: string,
    time3?: string,
    time4?: string,
    settime1: React.Dispatch<React.SetStateAction<string|undefined>>,
    settime2: React.Dispatch<React.SetStateAction<string|undefined>>,
    settime3: React.Dispatch<React.SetStateAction<string|undefined>>,
    settime4: React.Dispatch<React.SetStateAction<string|undefined>>,
    // isHalf: boolean,
    error12?: boolean,
    error23?: boolean,
    error34?: boolean,
    error1?: boolean,
    error2?: boolean,
    error3?: boolean,
    error4?: boolean,
    // setError12: React.Dispatch<React.SetStateAction<boolean>>,
    // setError23: React.Dispatch<React.SetStateAction<boolean>>,
    // setError34: React.Dispatch<React.SetStateAction<boolean>>,
    isRed?: boolean,
    isBlue?: boolean,
    showPicker: ()=>void,
    setF: React.Dispatch<React.SetStateAction<(x:string)=>void>>,
    setPickerTime: React.Dispatch<React.SetStateAction<Date>>,
  }
  
  export function TimeInput2({ isRed,isBlue,label1,label3,
    time1,time2,time3,time4,
    settime1,settime2,settime3,settime4,
    error12,error23,error34,
    error1=false,error2=false,error3=false,error4=false,
    // setError12,setError23,setError34,
    setPickerTime,showPicker,setF}: TimeInput2Props) {
    const {translations} = React.useContext(LocalizationContext);
    
    let ist1 = time1 ? true : false
    let ist2 = time2 ? true : false
    let ist3 = time3 ? true : false
    let ist4 = time4 ? true : false
    return (
      <View style={{ width:'100%', alignSelf:'center', 
      backgroundColor:R.colors.kusuri.backgroundApp}}>
        <View style={{ ...styles.subview, marginBottom:10 }}>
          <KusuriText 
            text={label1} 
            style={{fontSize: R.fonts.SuperSmall,
              fontFamily: 'Meiryo-Bold',
            color: isRed
            ? R.colors.kusuri.textRed
            : isBlue
            ? R.colors.kusuri.textBlue
            : R.colors.kusuri.textApp}}
          />
          <TouchableOpacity 
            onPress={()=>{
              ist1 
              ? setPickerTime(StringTimeToObject(time1??''))
              : setPickerTime(StringTimeToObject('08:00'));
              showPicker();
                setF(()=>(date:string)=>{
                  settime1(date)
                })
            }}
            style={{...(error1||error12) ? styles.textfielderror : styles.textField}}
          >
          {ist1 
          ? <KusuriText 
            text={time1??''} 
            style={{ ...styles.textnormal, paddingLeft: 10 }}
          />
          : <KusuriText 
            text={translations['regis2.time.placeholder']} 
            style={{ ...styles.textgrayy, paddingLeft: 10 }}
          />
          }
          </TouchableOpacity>
          <KusuriText 
            text={'~'} 
            style={{ ...styles.textbold, }}
          />
          <TouchableOpacity 
            onPress={()=>{
              ist2 
              ? setPickerTime(StringTimeToObject(time2??''))
              : setPickerTime(StringTimeToObject('12:00'));
              showPicker();
              setF(()=>(date:string)=>{
                settime2(date)
              })
            }}
            style={{...(error2||error12||error23) ? styles.textfielderror : styles.textField}}
          >
          {ist2 
          ? <KusuriText 
            text={time2??''} 
            style={{ ...styles.textnormal, paddingLeft: 10 }}
          />
          : <KusuriText 
            text={translations['regis2.time.placeholder']} 
            style={{ ...styles.textgrayy, paddingLeft: 10 }}
          />
          }
          </TouchableOpacity>
        </View>
        
        <View style={{ ...styles.subview,marginBottom:10 }}>
          <KusuriText 
            text={label3} 
            style={{fontSize: R.fonts.SuperSmall,
              fontFamily: 'Meiryo-Bold',
            color: isRed
            ? R.colors.kusuri.textRed
            : isBlue
            ? R.colors.kusuri.textBlue
            : R.colors.kusuri.textIntro}}
          />
          <TouchableOpacity 
            onPress={()=>{
              ist3 
              ? setPickerTime(StringTimeToObject(time3??''))
              : setPickerTime(StringTimeToObject('13:00'))
              showPicker();
              setF(()=>(date:string)=>{
                settime3(date)
              })
            }}
            style={{...(error3||error23||error34) ? styles.textfielderror : styles.textField}}
          >
          {ist3 
          ? <KusuriText 
            text={time3??''} 
            style={{ ...styles.textnormal, paddingLeft: 10 }}
          />
          : <KusuriText 
            text={translations['regis2.time.placeholder']} 
            style={{ ...styles.textgrayy, paddingLeft: 10 }}
          />
          }
          </TouchableOpacity>
          <KusuriText 
            text={'~'} 
            style={{ ...styles.textbold, }}
          />
          <TouchableOpacity 
            onPress={()=>{
              ist4 
              ? setPickerTime(StringTimeToObject(time4??''))
              : setPickerTime(StringTimeToObject('17:00'))
              showPicker();
              setF(()=>(date:string)=>{
                settime4(date)
              })
            }}
            style={{...(error4||error34) ? styles.textfielderror : styles.textField}}
          >
          {ist4 
          ? <KusuriText 
            text={time4??''} 
            style={{ ...styles.textnormal, paddingLeft: 10 }}
          />
          : <KusuriText 
            text={translations['regis2.time.placeholder']} 
            style={{ ...styles.textgrayy, paddingLeft: 10 }}
          />
          }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  type TimeInputProps = {
    label: string,
    time1?: string,
    time2?: string,
    // time3?: string,
    // time4?: string,
    settime1: React.Dispatch<React.SetStateAction<string|undefined>>,
    settime2: React.Dispatch<React.SetStateAction<string|undefined>>,
    // settime3: React.Dispatch<React.SetStateAction<string>>,
    // settime4: React.Dispatch<React.SetStateAction<string>>,
    isHalf: boolean,
    isRed?: boolean,
    isBlue?: boolean,
    showTimepicker: ()=>void,
    setF: React.Dispatch<React.SetStateAction<(x:string)=>void>>,
    setDate: React.Dispatch<React.SetStateAction<Date>>,
  }
  
  function TimeInput({ isRed, isBlue, isHalf,label,time1,time2,settime1,settime2,setDate,showTimepicker,setF}: TimeInputProps) {
    const {translations} = React.useContext(LocalizationContext);
    let ist1 = time1 ? true : false
    let ist2 = time2 ? true : false
    return (
      <View style={{ width:'100%', alignSelf:'center', 
      backgroundColor:R.colors.kusuri.backgroundApp ,marginBottom:10}}>
        <View style={{ ...styles.subview }}>
          <KusuriText 
            text={label} 
            style={{fontSize: R.fonts.SuperSmall,
            fontFamily: 'Meiryo-Bold',
            color: isRed? R.colors.kusuri.textRed: isBlue? R.colors.kusuri.textBlue: R.colors.kusuri.textIntro}}
          />
          <TouchableOpacity 
            onPress={()=>{
              ist1 
              ? setDate(StringTimeToObject(time1))
              : isHalf 
              ? setDate(StringTimeToObject('13:00'))
              : setDate(StringTimeToObject('08:00'));
              showTimepicker();
                setF(()=>(date:string)=>{
                  settime1(date)
                })
            }}
            style={{...true ? styles.textfielderror : styles.textField}}
          >
          {ist1 
          ? <KusuriText 
            text={time1} 
            style={{ ...styles.textnormal, paddingLeft: 10 }}
          />
          : <></>
          }
          {!ist1 
          ? <KusuriText 
            text={translations['regis2.time.placeholder']} 
            style={{ ...styles.textgrayy, paddingLeft: 10 }}
          />
          : <></>
          }
          </TouchableOpacity>
          {/* <TextInput 
            defaultValue={user.sun_open?JSONTimeToString(user.sun_open):''}
            placeholder={translations['regis2.time.placeholder']}
            placeholderTextColor={'#555555'} 
            onChangeText={(text)=>{
              setTimeSunO1(text)
            }}
            style={{ ...styles.textField}}
          /> */}
          <KusuriText 
            text={'~'} 
            style={{ ...styles.textbold, }}
          />
          <TouchableOpacity 
            onPress={()=>{
              ist2 
              ? setDate(StringTimeToObject(time2))
              : isHalf 
              ? setDate(StringTimeToObject('17:00'))
              : setDate(StringTimeToObject('12:00'));
              showTimepicker();
                  setF(()=>(date:string)=>{
                    settime2(date)
                  })
            }}
          style={{...true ? styles.textfielderror : styles.textField}}
          >
          {ist2 
          ? <KusuriText 
            text={time2} 
            style={{ ...styles.textnormal, paddingLeft: 10 }}
          />
          :<></>
          }
          {!ist2 
          ? <KusuriText 
            text={translations['regis2.time.placeholder']} 
            style={{ ...styles.textgrayy, paddingLeft: 10 }}
          />
          : <></>
          }
          </TouchableOpacity>
          {/* <TextInput 
            defaultValue={user.sun_close?JSONTimeToString(user.sun_close):''}
            placeholder={translations['regis2.time.placeholder']}
            placeholderTextColor={'#555555'} 
            onChangeText={(text)=>{
              setTimeSunC1(text)
            }}
            style={{ ...styles.textField}}
          /> */}
        </View>
        {/* {!time1 && !time3 ? (
        <></>
        ):(
        <View style={{...styles.subView }}>
          <WTText 
          text={label} 
          style={{ ...styles.textnormal }}
          />
          {!time1 ? (
          <></>
          ):(
          <WTText 
            text={JSONTimeToString(time1)+'-'+JSONTimeToString(time2)} 
            style={{ ...styles.textnormal }}
          />
          )}
          {!time1 || !time3 ? (
          <></>
          ):(
          <WTText 
            text={', '} 
            style={{ ...styles.textnormal }}
          />
          )}
          {!time3 ? (
          <></>
          ):(
          <WTText 
            text={JSONTimeToString(time3)+'-'+JSONTimeToString(time4)} 
            style={{ ...styles.textnormal }}
          />
          )}
        </View>
      )} */}
      </View>
    );
  }
  
  type TimeJSONProps = {
    label: string,
    time1?: string,
    time2?: string,
    time3?: string,
    time4?: string,
  }
  
  export function TimeJSON({ label,time1,time2,time3,time4 }: TimeJSONProps) {
    return (
      <View style={{ flex:1, paddingLeft:15, alignSelf:'flex-start', backgroundColor:R.colors.kusuri.backgroundApp }}>
        {(time1 || time3) 
        ? (
        <View style={{...styles.subView }}>
          <KusuriText 
          text={label} 
          style={{ ...styles.textnormal }}
          />
          {!time1 || !time2 ? (
          <></>
          ):(
          <KusuriText 
            text={SmartJSONTimeToString(time1)+'-'+SmartJSONTimeToString(time2)} 
            style={{ ...styles.textnormal }}
          />
          )}
          {!time1 || !time3 ? (
          <></>
          ):(
          <KusuriText 
            text={', '} 
            style={{ ...styles.textnormal }}
          />
          )}
          {!time3 || !time4 ? (
          <></>
          ):(
          <KusuriText 
            text={SmartJSONTimeToString(time3)+'-'+SmartJSONTimeToString(time4)} 
            style={{ ...styles.textnormal }}
          />
          )}
        </View>
        )
        : <></>
        }
      </View>
    );
  }
  
  type TimeProps = {
    label: string,
    time1?: string,
    time2?: string,
    time3?: string,
    time4?: string,
  }
  
  function Time({ label,time1,time2,time3,time4 }: TimeProps) {
    return (
      <View style={{ width:'100%', marginLeft:'10%', alignSelf:'center', backgroundColor:R.colors.kusuri.backgroundApp }}>
        {(time1 || time3) 
        ? (
        <View style={{...styles.subView }}>
          <KusuriText 
          text={label} 
          style={{ ...styles.textnormal }}
          />
          {!time1 ? (
          <></>
          ):(
          <KusuriText 
            text={time1+'-'+time2} 
            style={{ ...styles.textnormal }}
          />
          )}
          {!time1 || !time3 ? (
          <></>
          ):(
          <KusuriText 
            text={', '} 
            style={{ ...styles.textnormal }}
          />
          )}
          {!time3 ? (
          <></>
          ):(
          <KusuriText 
            text={time3+'-'+time4} 
            style={{ ...styles.textnormal }}
          />
          )}
        </View>
        )
        : <></>
      }
      </View>
    );
  }
  const styles = StyleSheet.create({
    // safe: {
    //  flex: 1, alignItems: 'center', backgroundColor:R.colors.kusuri.backgroundSafe
    // },
    // bg: {
    //  flex: 1, alignItems: 'center', width: '100%', height:'100%', backgroundColor:R.colors.kusuri.backgroundBg
    // },
    // container: {
    //  flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor:R.colors.kusuri.backgroundBg
    // },
    // container2: {
    //   width: '80%', backgroundColor:R.colors.kusuri.backgroundApp
    // },
    // container4: {
    //  justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor:R.colors.kusuri.backgroundApp
    // },
    // scroll: {
    //   flex: 1,
    //   width: '100%',
    // },
    // button: {
    //   width: '80%',
    //   position:'absolute',
    //   // bottom: 220
    // },
    subView: {
      flex: 1,
      width: '100%',
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      flexDirection: 'row',
      alignSelf: 'center',
    },
    // textheader: {
    //   fontSize: R.fonts.Large, fontWeight: 'bold', color:R.colors.kusuri.textGray, margin:10,
    // },
    textnormal: {
      fontSize: R.fonts.Medium, textAlign: 'left', color: R.colors.kusuri.textGray,
    },
    // textdetail: {
    //   fontSize: R.fonts.SuperSmall, color:R.colors.kusuri.textGray, margin:0,
    // },
    subview: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
    },
    textgrayy: {
      fontSize: R.fonts.Medium,
      color:R.colors.kusuri.textGray
    },
    textbold: {
      fontSize: R.fonts.Medium,
      fontFamily: 'Meiryo-Bold',
      color: R.colors.kusuri.textApp,
      margin: 5,
    },
    textField: {
      backgroundColor: R.colors.kusuri.backgroundGray, 
      justifyContent: 'center', 
      // minWidth: '20%',
      // width: '40%',
      // maxWidth: '40%',
      // marginVertical: 10,
      height: 50,
      flex:1,
      borderWidth:1,
      borderRadius:5,
      borderColor: '#AFAFB1',
    },
    textfielderror: {
      backgroundColor: R.colors.kusuri.backgroundGray, 
      justifyContent: 'center',
      // minWidth: '20%',
      // width: '40%',
      // maxWidth: '40%',
      // marginVertical: 10,
      height: 50,
      flex:1,
      // borderWidth:1,
      borderRadius:5,
      // borderColor: '#AFAFB1',
      borderColor: R.colors.kusuri.backgroundRed,
      borderWidth: 3,
    },
  });