//
//  RCTWKWebView.h
//  Localhost
//
//  Created by Tsing Tsai on 23/6/2016.
//  Copyright © 2016 Tsing Tsai. All rights reserved.
//

@import WebKit;
#import "RCTComponent.h"

@interface RCTWKWebView : WKWebView

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
