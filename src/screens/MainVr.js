import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


import SendIntentAndroid from 'react-native-send-intent'

export  class MainVr extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to VR</Text>
            <Button title="Open VR" onPress={()=>{SendIntentAndroid.openApp('com.google.android.gm').then((wasOpened) => {});}}></Button>
        </View>
        );
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
  });