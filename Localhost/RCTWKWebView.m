//
//  RCTWKWebView.m
//  Localhost
//
//  Created by Tsing Tsai on 18/6/2016.
//  Copyright © 2016 Tsing Tsai. All rights reserved.
//

#import "RCTWKWebView.h"
#import <MapKit/MapKit.h>
@implementation RCTWKWebView

RCT_EXPORT_MODULE()

- (UIView *)view
{
//    WKWebView *wv = [[WKWebView alloc] init];
//    wv.allowsBackForwardNavigationGestures = YES;
//    
//    wv.scrollView.delegate = self;
//
//    NSURL *url = [NSURL URLWithString:@"https://www.bing.com"];
//    NSURLRequest *request = [NSURLRequest requestWithURL:url];
//    [wv loadRequest:request];
    MKMapView *wv = [[MKMapView alloc] init];
    return wv;
}

- (void) scrollViewDidScroll:(UIScrollView *)scrollView {
    NSLog(@"SDFSDF");
}


@end
