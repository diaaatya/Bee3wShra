import React, { useEffect, useState } from 'react';
import { Image, Button , StyleSheet, StatusBar, View} from 'react-native';
import colors from './app/config/colors'
import ListngEditScreen from './app/screens/ListngEditScreen';
import * as ImagePicker from 'expo-image-picker'
import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen'
import ImageInputList from './app/components/ImageInputList';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default function App() {
 
  return (
    <Screen>
    <ListngEditScreen></ListngEditScreen>
    <AdMobBanner
    style={{alignSelf:"center" , width:"100%" , marginleft:30 , marginTop:30}}
     
      adUnitID="ca-app-pub-2013283196465519/8817559602" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
       onDidFailToReceiveAdWithError={this.bannerError} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },


});
