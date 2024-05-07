
// ##Beyond a Calendar Native Module

/**
 * This exposes the native CalendarModule module as a JS module. This has a
 * function 'createCalendarEvent' which takes the following parameters:
 *
 * 1. String name: A string representing the name of the event
 * 2. String location: A string representing the location of the event
 */

// In your other JavaScript files you can access the native module and invoke its method like this:

// import NativeCalendarModule from './NativeCalendarModule';
// NativeCalendarModule.createCalendarEvent('foo', 'bar');

// ##Exporting Constants
// const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
// console.log(DEFAULT_EVENT_NAME);

// ##Callbacks
// const onSubmit = () => {
//   CalendarModule.createCalendarEvent(
//     'Party',
//     '04-12-2020',
//     eventId => {
//       console.log(`Created a new event with id ${eventId}`);
//     },
//   );
// };


// const onPress = () => {
//   CalendarModule.createCalendarEventCallback(
//     'testName',
//     'testLocation',
//     error => {
//       console.error(`Error found! ${error}`);
//     },
//     eventId => {
//       console.log(`event id ${eventId} returned`);
//     },
//   );
// };

// ##Promises
// const onSubmit = async () => {
//   try {
//     const eventId = await CalendarModule.createCalendarEvent(
//       'Party',
//       'my house',
//     );
//     console.log(`Created a new event with id ${eventId}`);
//   } catch (e) {
//     console.error(e);
//   }
// };


// ##Module Name
import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

interface CalendarInterface {
  
  //// RCT_EXPORT_MODULE @ReactMethod
  createCalendarEvent(name: string, location: string): void;
  
  //// SYNCHRONOUS_METHOD isBlockingSynchronousMethod
  getName():string;

  //// Exporting Constants
  constantsToExport():{string:any}
  getConstants():{string:any}

  //// Callbacks

  createCalendarEventWithCallback:(NSString *)title
  location:(NSString *)location
  myCallback:(RCTResponseSenderBlock)callback)

  createCalendarEvent:(NSString *)title 
  location:(NSString *)location 
  callback: (RCTResponseSenderBlock)callback)

  createCalendarEvent(String name, 
    String location, 
    Callback callBack) {

  createCalendarEvent(String name, 
    String location, 
    Callback callBack) {
    
RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title location:(NSString *)location callback: (RCTResponseSenderBlock)callback)
{
  public void createCalendarEvent(String name, 
    String location, Callback callBack) {
      Integer eventId = ...

      RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title
                        location:(NSString *)location
                        errorCallback: (RCTResponseSenderBlock)errorCallback
                        successCallback: (RCTResponseSenderBlock)successCallback)
      {
        public void createCalendarEvent(String name, String location, Callback myFailureCallback, Callback mySuccessCallback) {
        }
    //// Promises
}
export default CalendarModule as CalendarInterface;