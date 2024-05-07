
#import "RNWTReactPreference.h"
#import "WTPreference.h"

#import <React/RCTUtils.h>

@interface RNWTReactPreference()

@property (nonatomic, retain) WTPreference *toast;

@end

@implementation RNWTReactPreference

- (instancetype)init {
    self = [super init];
    if (self) {
        self.toast = [[WTPreference alloc] init];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(show:(NSString *)text)
{
    [self.toast showToast:text];
}

- (NSDictionary *)constantsToExport
{
    return [self standardUsedefault];
}

- (NSDictionary *)standardUsedefault
{
    return RCTJSONClean([[NSUserDefaults standardUserDefaults] dictionaryRepresentation]);
}

@end
  
