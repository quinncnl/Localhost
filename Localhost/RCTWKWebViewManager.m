//
//  RCTWKWebView.m
//  Localhost
//
//  Created by Tsing Tsai on 18/6/2016.
//  Copyright © 2016 Tsing Tsai. All rights reserved.
//

#import "RCTWKWebViewManager.h"


@implementation RCTWKWebViewManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

RCTWKWebView *wv;

- (UIView *)view
{
    wv = [[RCTWKWebView alloc] init];
    wv.allowsBackForwardNavigationGestures = YES;
    
    wv.scrollView.delegate = self;

    NSURL *url = [NSURL URLWithString:@"https://www.bbc.com"];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    [wv loadRequest:request];

    return wv;
}

double lastOffset = 0;
bool isGoingDown = false;
bool shouldFullscreen = false;

- (void) scrollViewWillBeginDragging:(UIScrollView *)scrollView {
    lastOffset = scrollView.contentOffset.y;
}

- (void) scrollViewDidScroll:(UIScrollView *)scrollView {
    
        if (scrollView.contentOffset.y > lastOffset) {
            if (isGoingDown == false) {
                shouldFullscreen = true;
                wv.onChange(@{@"type": @"down"});
                NSLog(@"go down");
            }
            isGoingDown = true;
        }
        else {
            if (isGoingDown == true) {
                shouldFullscreen = false;
                wv.onChange(@{@"type": @"up"});
                NSLog(@"go up");
            }
            isGoingDown = false;
        }


}


@end
