/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      helloButtonText: '',
      worldButtonText: ''
    }

    this.onHelloButtonPress = this.onHelloButtonPress.bind(this)
    this.onWorldButtonPress = this.onWorldButtonPress.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text testID='welcome' style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity testID='hello_button' onPress={this.onHelloButtonPress}>
          <Text>{this.state.helloButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={this.onWorldButtonPress}>
          <Text>{this.state.worldButtonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onHelloButtonPress() {
    this.setState({ helloButtonText: 'Hello!!!' })
  }

  onWorldButtonPress() {
    this.setState({ worldButtonText: 'World!!!' })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
