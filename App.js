import React from 'react';
import { StyleSheet,  View,Platform , StatusBar,Image,Text, TextInput} from 'react-native';
import colors from './app/config/colors'
import Screen from "./app/components/Screen"
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const catgories = [
  {lable :"Furntier" , value: "1"},
  {lable :"Clothing" , value: "2"},
  {lable :"Elctronics" , value: "3"},

]

export default function App() {
  return (
    <Screen>
      <AppPicker  items={catgories} icon={"apps"}  placeholder="Catagory"></AppPicker>
      <AppTextInput icon={"email"} placeholder="Enter name" ></AppTextInput>
    </Screen>
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
