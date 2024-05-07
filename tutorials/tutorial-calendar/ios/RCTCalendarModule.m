// RCTCalendarModule.m
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule
{
  bool hasListeners;
}

// #iOS Native Modules

// To export a module named RCTCalendarModule
// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
RCT_EXPORT_MODULE();
// The native module can then be accessed in JS like this:

// const {CalendarModule} = ReactNative.NativeModules;

// ##Module Name
// To export a module named CalendarModuleFoo
RCT_EXPORT_MODULE(CalendarModuleFoo);
// The native module can then be accessed in JS like this:

// const {CalendarModuleFoo} = ReactNative.NativeModules;

// ##Export a Native Method to JavaScript
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

// ##Synchronous Methods
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[UIDevice currentDevice] name];
}

// ##Exporting Constants
- (NSDictionary *)constantsToExport
{
 return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}
- (NSDictionary *)getConstants
{
 return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}

// ##Callbacks

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title
                location:(NSString *)location
                myCallback:(RCTResponseSenderBlock)callback)

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title 
                location:(NSString *)location 
                callback: (RCTResponseSenderBlock)callback)
{
 NSInteger eventId = ...
 callback(@[@(eventId)]);

 RCTLogInfo(@"Pretending to create an event %@ at %@", title, location);
}


RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title 
location:(NSString *)location 
callback: (RCTResponseSenderBlock)callback)
{
  NSNumber *eventId = [NSNumber numberWithInt:123];
  callback(@[[NSNull null], eventId]);
}

RCT_EXPORT_METHOD(createCalendarEventCallback:(NSString *)title
                  location:(NSString *)location
                  errorCallback: (RCTResponseSenderBlock)errorCallback
                  successCallback: (RCTResponseSenderBlock)successCallback)
{
  @try {
    NSNumber *eventId = [NSNumber numberWithInt:123];
    successCallback(@[eventId]);
  }

  @catch ( NSException *e ) {
    errorCallback(@[e]);
  }
}

// ##Promises

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title
                 location:(NSString *)location
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
 NSInteger eventId = createCalendarEvent();
 if (eventId) {
    resolve(@(eventId));
  } else {
    reject(@"event_failure", @"no event id returned", nil);
  }
}

// ##Sending Events to JavaScript
// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  if (hasListeners) {// Only send events if anyone is listening
    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  }
}

##Threading
- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

Similarly, if an operation may take a long time to complete, the native module can specify its own queue to run operations on. Again, currently React Native will provide a separate method queue for your native module, but this is an implementation detail you should not rely on. If you don't provide your own method queue, in the future, your native module's long running operations may end up blocking async calls being executed on other unrelated native modules. The RCTAsyncLocalStorage module here, for example, creates its own queue so the React queue isn't blocked waiting on potentially slow disk access.

- (dispatch_queue_t)methodQueue
{
 return dispatch_queue_create("com.facebook.React.AsyncLocalStorageQueue", DISPATCH_QUEUE_SERIAL);
}

The specified methodQueue will be shared by all of the methods in your module. If only one of your methods is long-running (or needs to be run on a different queue than the others for some reason), you can use dispatch_async inside the method to perform that particular method's code on another queue, without affecting the others:

RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
 dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
   // Call long-running code on background thread
   ...
   // You can invoke callback from any thread/queue
   callback(@[...]);
 });
}

// ##Dependency Injection


// ##Exporting Swift
Swift doesn't have support for macros, so exposing native modules and their methods to JavaScript inside React Native requires a bit more setup. However, it works relatively the same. Let's say you have the same CalendarModule but as a Swift class:

// CalendarManager.swift

@objc(CalendarManager)
class CalendarManager: NSObject {

 @objc(addEvent:location:date:)
 func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
   // Date is ready to use!
 }

 @objc
 func constantsToExport() -> [String: Any]! {
   return ["someKey": "someValue"]
 }

}

It is important to use the @objc modifiers to ensure the class and functions are exported properly to the Objective-C runtime.

Then create a private implementation file that will register the required information with React Native:

// CalendarManagerBridge.m
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end


For those of you new to Swift and Objective-C, whenever you mix the two languages in an iOS project, you will also need an additional bridging file, known as a bridging header, to expose the Objective-C files to Swift. Xcode will offer to create this header file for you if you add your Swift file to your app through the Xcode File>New File menu option. You will need to import RCTBridgeModule.h in this header file.

// CalendarManager-Bridging-Header.h
#import <React/RCTBridgeModule.h>

You can also use RCT_EXTERN_REMAP_MODULE and _RCT_EXTERN_REMAP_METHOD to alter the JavaScript name of the module or methods you are exporting. For more information see RCTBridgeModule.

Important when making third party modules: Static libraries with Swift are only supported in Xcode 9 and later. In order for the Xcode project to build when you use Swift in the iOS static library you include in the module, your main app project must contain Swift code and a bridging header itself. If your app project does not contain any Swift code, a workaround can be a single empty .swift file and an empty bridging header.

// ##Reserved Method Names
invalidate()
Native modules can conform to the RCTInvalidating protocol on iOS by implementing the invalidate() method. This method can be invoked when the native bridge is invalidated (ie: on devmode reload). Please use this mechanism as necessary to do the required cleanup for your native module.
@end