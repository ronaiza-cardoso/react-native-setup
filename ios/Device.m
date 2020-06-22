//
//  Device.m
//  reactNativeSetup
//
//  Created by Ronaiza Cardoso on 22/06/2020.
//

#import "Device.h"
#import <UIKit/UIKit.h>

@implementation Device

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback){
  @try{
    NSString *deviceName = [[UIDevice currentDevice] name];
    callback(@[[NSNull null], deviceName]);
  }
  @catch(NSException *exception){
    callback(@[exception.reason, [NSNull null]]);
  }
}

@end
