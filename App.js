import React, { useEffect, useState } from 'react';
import { Image, Button , StyleSheet, StatusBar, View} from 'react-native';
import colors from './app/config/colors'
import ListngEditScreen from './app/screens/ListngEditScreen';
import * as ImagePicker from 'expo-image-picker'
import ImageInput from './app/components/ImageInput';
import Screen from './app/components/Screen'
import ImageInputList from './app/components/ImageInputList';



export default function App() {

  const [photoUris, setPhotoUris] =useState([]);
  
  const handleAdd = uri =>{
    setPhotoUris ([...photoUris , uri]);
  }
  const handleRemove = uri =>{
    setPhotoUris( photoUris.filter(imageUri => imageUri !== uri ));
  }
  return (
    <Screen style={styles.container}>
    <View>
      <ImageInputList 
      onChangeImage={(uri) => setPhotoUri(uri)}
      imageUris={photoUris} 
      onAddImage={uri => handleAdd(uri) }
      onRemoveImage = {handleRemove}
      style={{height:100 , width:100}} />

      <ListngEditScreen></ListngEditScreen>
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },


});
