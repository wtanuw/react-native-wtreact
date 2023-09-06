
import { NativeModules } from 'react-native';

const { RNNativePreference } = NativeModules;

export default RNNativePreference;

var SharedPreferences = require('./SharedPreferences');
module.exports = SharedPreferences;
