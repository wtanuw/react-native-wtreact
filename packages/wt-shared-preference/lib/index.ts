
import { NativeModules, Platform } from 'react-native';

import {Settings} from 'react-native';


const LINKING_ERROR =
  `The package '@react-native-wtreact/preference' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const AndroidSharedPreferences = NativeModules.RNWTReactPreference
  ? NativeModules.RNWTReactPreference
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

// from getName()
// export default SharedPreferences;
export {AndroidSharedPreferences}

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
type GetItemCallback = (value: string | null) => void;
type GetMultipleItemsCallback = (values: string[] | null) => void;

// OBJECTIVE-C		JAVA		JAVASCRIPT
// BOOL		Boolean/boolean		?boolean/boolean
				
// NSNumber/double		Double/double		?number/number
// NSString		String		string
// RCTResponseSenderBlock, RCTResponseErrorBlock		Callback		Function
// RCTPromiseResolveBlock, RCTPromiseRejectBlock		Promise		Promise
// NSDictionary		ReadableMap		Object
// NSArray		ReadableArray		Array

//deprecated

// Integer Java/Kotlin -> ?number
// Float Java/Kotlin -> ?number
// int Java -> number
// float Java -> number

// Function (failure) -> RCTResponseErrorBlock
// Number -> NSInteger
// Number -> CGFloat
// Number -> float
// const Settings = {
//   _settings: (NativeSettingsManager &&
//     NativeSettingsManager.getConstants().settings: any),

//   get(key: string): mixed {
//     // $FlowFixMe[object-this-reference]
//     return this._settings[key];
//   },

//   set(settings: Object) {
//     // $FlowFixMe[object-this-reference]
//     this._settings = Object.assign(this._settings, settings);
//     NativeSettingsManager.setValues(settings);
//   },

// };


class SharedPrefUserDefault {
  private static myInstance:SharedPrefUserDefault;

  /**
   * @returns {SharedPrefUserDefault}
   */
  static getInstance() {
    console.log('--getInstance')
    if (SharedPrefUserDefault.myInstance == null) {
      SharedPrefUserDefault.myInstance = new SharedPrefUserDefault()
      console.log('--getInstance null')
      this.myInstance.prepare()
    }
    return this.myInstance;
  }

  private static _pref:{[key: string]: any,} = {}

  constructor() {
    console.log('--constru')
  }

  prepare() {
    console.log('--prepare')
    SharedPrefUserDefault._pref = AndroidSharedPreferences.getConstants()
    console.log('--prepare',SharedPrefUserDefault._pref)
  }

  /**
  * 
  */
  setDefaultName() {
    if (isAndroid) {
      AndroidSharedPreferences.setDefaultName()
      AndroidSharedPreferences.initHandler()
    }
  }
  setPreferenceName() {
    if (isAndroid) {
      AndroidSharedPreferences.setPreferenceName()
      AndroidSharedPreferences.initHandler()
    }
  }
  setName(name: string) {
    if (isAndroid) {
      AndroidSharedPreferences.setName(name)
      AndroidSharedPreferences.initHandler()
    }
  }
  async getName() {
    if (isAndroid) {
      let a = await AndroidSharedPreferences.getSharedName()
      console.log('sharedPref getName:',a)
      return a
    }
    return ''
  }
  
  pref() {
    return SharedPrefUserDefault._pref
  }
  
  getPref() {
    return SharedPrefUserDefault._pref
  }
  getPrefStringify() {
    return JSON.stringify(SharedPrefUserDefault._pref,null,' ')
  }

  /**
  * 
  */
  get(key: string):any {
    return SharedPrefUserDefault._pref[key]
  }
  async asyncGet(key: string) {
    if (isIOS) {
      let query:{[key: string]: any} = Settings.get(key)
      Object.keys(query).forEach(function(key,index) {
        let value = query[key]
        SharedPrefUserDefault._pref[key] = value
      });
      return query
    } else if (isAndroid) {
      let query:{[key: string]: any} = await AndroidSharedPreferences.getItem(key)
      Object.keys(query).forEach(function(key,index) {
        let value = query[key]
        SharedPrefUserDefault._pref[key] = value
      });
      return query
    }
    return {}
  }

  set(key: string, value: string|boolean|number|undefined) {
    SharedPrefUserDefault._pref[key] = value
    if (isIOS) {
      Settings.set({key:value})
    } else if (isAndroid) {
      // console.log('setItem: ', key, '->', value)
      if (typeof value == 'boolean') {
        console.log('set: bolean', key, '->', value)
        AndroidSharedPreferences.setBoolean(key, value)
      } else if (typeof value == 'number') {
        console.log('set: dulbe', key, '->', value)
        AndroidSharedPreferences.setDouble(key, value)
      } else if (typeof value == 'string') {
        console.log('set: string', key, '->', value)
        AndroidSharedPreferences.setString(key, value)
      }
    }
  }
  setMulti(settings: Record<string, string|boolean|number|undefined>) {
    if (isIOS) {
      Settings.set(settings)
      Object.keys(settings).forEach(function(key,index) {
        let value = settings[key]
        SharedPrefUserDefault._pref[key] = value
      });
    } else if (isAndroid) {
      Object.keys(settings).forEach(function(key,index) {
        let value = settings[key]
        SharedPrefUserDefault.getInstance().set(key, value)
      });
    }
  }

  clear() {
  }
  removeItem(key: string) {
    SharedPrefUserDefault._pref[key] = undefined
    if (isIOS) {
      Settings.set({key:undefined})
    } else if (isAndroid) {
      AndroidSharedPreferences.removeItem(key)
    }
  }
}

/**
 * 
 */

// export function setObject(key: string , value: any) {
//   if (isIOS) {
//     Settings.set({key:value})
//   } else if (isAndroid) {
//     if (typeof value == 'boolean') {

//     } else if (typeof value == 'number') {

//     } else if (typeof value == 'string') {

//     } else {

//     }
//     AndroidSharedPreferences.setItem(key, value)
//   }
// }
// export function setItem(key: string , value: any) {
//   if (isIOS) {
//     Settings.set({key:value})
//   } else if (isAndroid) {
//     // console.log('setItem: ', key, '->', value)
//     if (typeof value == 'boolean') {
//       // console.log('setItem: bolean', key, '->', value)
//       AndroidSharedPreferences.setBoolean(key, value)
//     } else if (typeof value == 'number') {
//       // console.log('setItem: dulbe', key, '->', value)
//       AndroidSharedPreferences.setDouble(key, value)
//     } else if (typeof value == 'string') {
//       // console.log('setItem: string', key, '->', value)
//       AndroidSharedPreferences.setString(key, value)
//     }
//   }
// }
// export function set(settings: Record<string, any>) {
//   if (isIOS) {
//     Settings.set(settings)
//   } else if (isAndroid) {
//     Object.keys(settings).forEach(function(key,index) {
//     let value = settings[key]
//     setItem(key, value)
//     });
//   }
// }
// export function sets(settings: Record<string, any>) {
//   if (isIOS) {
//     Settings.set(settings)
//   } else if (isAndroid) {
//     AndroidSharedPreferences.set(settings)
//   }
// }
// export function getItem(key: string, callback: GetItemCallback) {
//   if (isIOS) {
//     return Settings.get(key)
//   } else if (isAndroid) {
//     return AndroidSharedPreferences.getItem(key)
//   }
// }
// export function get(key: string) : any {
//   if (isIOS) {
//     return Settings.get(key)
//   } else if (isAndroid) {
//     return AndroidSharedPreferences.getItem(key)
//   }
// }
// export function getBoolean(key: string) : boolean {
//   if (isIOS) {
//     return Settings.get(key)
//   } else if (isAndroid) {
//     return AndroidSharedPreferences.getItem(key)
//   }
// }
// export function getString(key: string) : string {
//   if (isIOS) {
//     return Settings.get(key)
//   } else if (isAndroid) {
//     return AndroidSharedPreferences.getItem(key)
//   }
// }
// export async function getNumber(key: string) : number {
//   if (isIOS) {
//     return Settings.get(key)
//   } else if (isAndroid) {
//     return  AndroidSharedPreferences.getItem(key)
//   }
// }
// export function getItems(keys: string[], callback: GetMultipleItemsCallback) {
// }
// export function getAll(callback: GetMultipleItemsCallback) {

// }
// export function getAllKeys(callback: GetMultipleItemsCallback) {
// }


const Android = {
  setDefaultName: SharedPrefUserDefault.getInstance().setDefaultName,
  setPreferenceName: SharedPrefUserDefault.getInstance().setPreferenceName,
  setName: SharedPrefUserDefault.getInstance().setName,
  // export function setItem,
  // set: set,
  // export function sets,
  // export function getItem,
  // get: get,
  // export function getItems,
  // export function getAll,
  // export function clear,
  // export function getAllKeys,
  // export function removeItem,
}

const SettingsStatic = {
  getName:SharedPrefUserDefault.getInstance().getName,
  init: SharedPrefUserDefault.getInstance,
  setDefaultName: SharedPrefUserDefault.getInstance().setDefaultName,
  setPreferenceName: SharedPrefUserDefault.getInstance().setPreferenceName,
  setName: SharedPrefUserDefault.getInstance().setName,
  // export function setItem,
  set: SharedPrefUserDefault.getInstance().set,
  setMulti: SharedPrefUserDefault.getInstance().setMulti,
  // export function sets,
  // export function getItem,
  get: SharedPrefUserDefault.getInstance().get,
  getAsync: SharedPrefUserDefault.getInstance().asyncGet,
  // export function getItems,
  getPref: SharedPrefUserDefault.getInstance().getPref,
  getPrefStringify: SharedPrefUserDefault.getInstance().getPrefStringify,
  clear: SharedPrefUserDefault.getInstance().clear,
  // export function getAllKeys,
  removeItem: SharedPrefUserDefault.getInstance().removeItem,
  android: Android,
  pref:SharedPrefUserDefault.getInstance().pref,
}
export default SettingsStatic;