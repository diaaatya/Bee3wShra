import React from 'react';
import { Text,StyleSheet,StatusBar,Platform, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import navigationThem from './app/navigation/navigationThem';


export default function App() {
 
  return (
    <NavigationContainer theme={navigationThem} >
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bar:{
    height:200
  }


});
