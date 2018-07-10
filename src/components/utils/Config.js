import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    Switch,
} from 'react-native';


export default class Intro extends Component {
  render() {
    return (
      
         <View style={styles.box}>
             <View style={styles.header}>
                 <Text style={styles.title}>Configuration</Text>
                 <Switch style={styles.switch} />
             </View>
             <Text style={styles.comment}>This is configuration content
                You have to create reusable component for your app.
                There is no wonder how you can do it.
                Only impotant thing is to implement it.
             </Text>
         </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {     
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#3d3431',
    },
    box: {
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 6,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 12 },
      shadowOpacity: 0.9,
      shadowRadius: 2,
      elevation: 14,
    },
    header: {
      marginTop: 20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-between',
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft:20,
      color: 'black',
    },
    switch: {
      marginRight: 20,
    },
    comment: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 16,
      color: 'black'
    }
});
