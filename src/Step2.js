import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as constants from './common/Constants';
import firebase from 'react-native-firebase';

export default class Step2 extends React.Component {
  constructor() {
    super();
    this.state = {
      gradientColors:['#4c669f', '#3b5998', '#192f6a']

    };
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }
moveToNextView =() =>{

}
  render() {
    return (
      <LinearGradient colors={this.state.gradientColors} style={{flex:1}}>

        <View style={styles.container}>
            <View style={styles.viewButton}>

              <TouchableOpacity onPress={this.moveToNextView()}>
                <Text style={{fontSize:140, padding:'10%', width:'100%', height:'100%', backgroundColor:'green'}} >Do you want a plant? </Text>
              </TouchableOpacity>
          
            </View>
         
        </View>
      
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
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
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }, 
  viewButton:{
   
   width:'100%',
   height:'100%',
    justifyContent:'center',
    backgroundColor:'red'

  }
});
