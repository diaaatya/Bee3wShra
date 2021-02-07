import React from 'react';
import { StyleSheet,  View,Platform , StatusBar,Image} from 'react-native';
import colors from './app/config/colors'

import IntroScreen from './app/screens/IntroScreen'
import AppButton from './app/components/AppButton'
import AppText from './app/components/AppText'
import Card from './app/components/Card'
import ListingScreen from './app/screens/ListingScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
export default function App() {
  return (
    <ViewImageScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",

    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

});
