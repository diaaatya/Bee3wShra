import React, { useState } from 'react';
import { StyleSheet,  View,Platform , StatusBar,Image,Text, TextInput} from 'react-native';
import colors from './app/config/colors'

import LoginScreen from './app/screens/LoginScreen';

const catgories = [
  {lable :"Furntier" , value: "1"},
  {lable :"Clothing" , value: "2"},
  {lable :"Elctronics" , value: "3"},
]


export default function App() {

  const [catgory , setCagory] = useState()

  return (
    <LoginScreen></LoginScreen>
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
