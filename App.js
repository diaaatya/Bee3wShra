import React from 'react';
import { StyleSheet,  View,Platform , StatusBar,Image} from 'react-native';
import colors from './app/config/colors'

import Screen from './app/components/Screen'
import Icon from './app/components/Icon'

export default function App() {
  return (
    <Screen>
      <Icon
        name="email"
        size={50}
        backgroundColor= "red"
        iconColor= "white">
      </Icon>
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
