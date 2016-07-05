'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Navigator,
  AppRegistry,
  Animated,
  LayoutAnimation,
  RCTNetworking,
  Image
} = ReactNative;

import { requireNativeComponent } from 'react-native';

var RCTWKWebViewManager = requireNativeComponent('RCTWKWebView', null);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBar: {
    backgroundColor: '#efefef',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingTop: 22,
    flexDirection: 'row',
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    padding: 5,
    flexDirection: 'row',
  },
  titleText: {
    flex: 1,
    textAlign: "center",
    fontSize: 10,
  },
  button: {
    flex: 0,
    height: 28,
    padding: 7,
    marginLeft: 2,
    marginRight: 6,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dddddd",
  },

  buttonText: {
    fontSize: 11,
  },
  toolbarButton: {
    width: 22,
    height: 22
  }
});

var WebViewExample = React.createClass({

  getInitialState() {
    return {
      height: 40,
      barPadding: 5
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.titleText}>Tsing</Text>
        </View>

        <RCTWKWebViewManager onChange={(e) => {
          console.debug(e.type);

          switch (e.type) {
            case "down":
              LayoutAnimation.easeInEaseOut();
              this.setState({height: 0, barPadding: 0});
            break;
            case "up":
              LayoutAnimation.easeInEaseOut();
              this.setState({height: 40, barPadding: 5});
            break;
          }
        }} style={styles.container} />

        <View style={[styles.bottomBar, {height: this.state.height, paddingTop: this.state.barPadding, paddingBottom: this.state.barPadding}]}>
          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.button}>
              <Image style={styles.toolbarButton} source={{uri: './res/backward.png'}} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.button}>
              <Image style={styles.toolbarButton} source={{uri: "./res/forward.png" }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Sites</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  },

});


// Module name
AppRegistry.registerComponent('WebViewExample', () => WebViewExample);
