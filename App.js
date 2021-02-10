import React, { useState } from 'react';
import { StyleSheet,  View,Platform , StatusBar,Image,Text, TextInput} from 'react-native';
import colors from './app/config/colors'
import ListngEditScreen from './app/screens/ListngEditScreen';



export default function App() {

  const [catgory , setCagory] = useState()

  return (
    <ListngEditScreen/>
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
