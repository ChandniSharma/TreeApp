import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, } from 'react-navigation';
import Benefits from './src/Benefits'
import SideMenu from './src/sidemenu/SideMenu';

import firebase from 'react-native-firebase';

const DrawerNavigator = new createDrawerNavigator(
  {
    Benefits: {
      screen: Benefits, navigationOptions: {
        header: null
      },
    },
  },
    {
      contentComponent: SideMenu
    }
  
  );

  const navigator = createStackNavigator({
    Benefits:{screen:Benefits}

  }, 
  {
    initialRouteName:'Benefits', 
    gesturesEnabled: false,
    headerMode: 'none',
  }
  )
  const RootNavigator = createAppContainer(navigator);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
     
          <RootNavigator />
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
  }
});
