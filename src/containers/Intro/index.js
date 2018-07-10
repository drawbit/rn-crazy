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
          <View style={styles.header}>
             <Text style={styles.text}>Loading people</Text>
          </View>  
          <View style={styles.body}>
                <View style={{flexDirection:'column'}}>    
                    <View style={[styles.circleTopLeft, styles.circle]} />
                    <View style={[styles.circleBottomLeft, styles.circle]} />
                </View>
                <View style={{flexDirection:'column'}}>
                        <View style={[styles.circleTopRight, styles.circle]} />
                        <View style={[styles.circleBottomRight, styles.circle]} />
                </View>
          </View>      
        <Image style={[styles.centerCircle, styles.circle]} source={require('../../../assets/message/combined-shape-hdpi.png')} />
      </View>  
    )
  }
};
