//
//  EmbeddedView.m
//  Localhost
//
//  Created by Tsing Tsai on 17/6/2016.
//  Copyright © 2016 Tsing Tsai. All rights reserved.
//

#import "EmbeddedView.h"
#import "RCTRootView.h"

@implementation EmbeddedView

-(void) awakeFromNib {
    
    NSDictionary *props = @{@"text" : @"Hello, world!"};
    
    NSString *urlString = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL *jsCodeLocation = [NSURL URLWithString:urlString];
    
    
//    NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"WebViewExample"
                                                 initialProperties:props
                                                     launchOptions:nil];
    
    [self addSubview:rootView];
    rootView.frame = self.bounds;
}

@end
