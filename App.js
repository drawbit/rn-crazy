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
  View
} from 'react-native';

import Intro from './src/containers/Intro';
import Config from './src/components/utils/Config';


export default class App extends Component {
  render() {
    return (
        <View>
          <Config />
          <Text>adfasdf</Text>
        </View>
    );
  }
}