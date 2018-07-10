import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
} from 'react-native';

import styles from './styles'

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
         <View>
             <Text>Configuration</Text>
         </View>
      </View>  
    )
  }
};
