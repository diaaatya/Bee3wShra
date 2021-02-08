import React from 'react';
import { StyleSheet,  View,Platform , StatusBar,Image,Text} from 'react-native';
import colors from './app/config/colors'


import Card from './app/components/Card';
import ItemListingScreen from './app/screens/ItemListingScreen';

export default function App() {
  return (
      <ItemListingScreen/>
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
