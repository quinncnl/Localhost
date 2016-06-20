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
  AppRegistry
} = ReactNative;

import { requireNativeComponent } from 'react-native';
var RCTWKWebView = requireNativeComponent('RCTWKWebView', null);

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
  }
});

var WebViewExample = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.titleText}>Tsing</Text>
        </View>

        <RCTWKWebView style={styles.container}></RCTWKWebView>


        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Refresh</Text>
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
