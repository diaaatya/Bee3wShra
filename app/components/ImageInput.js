import React, { useEffect } from 'react';
import {View , StyleSheet ,Image, Alert} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker'


function ImageInput({imageUri ,onChangeImage}) {
    useEffect(()=> {
        requestPermission();

    },[])
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted){
          alert("you need to have camera permission");
        }
      } 
const handlePress = () =>{
    if(!imageUri){
        selectImage();
    }else{
        Alert.alert( 'Delete ','Are you sure you want to remove this image?',[
            {text : "yes" , onPress : ()=> onChangeImage(null) },
            {text:"no"}
        ])
    }
}
const selectImage = async() => {
    try {
      const result =  await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          quality:0.5
      });
       if (!result.cancelled){
          onChangeImage(result.uri);
       }
            
    } catch (error) {
      console.log("thir was an error" , error)
    }

  }    
return (
<TouchableWithoutFeedback onPress={handlePress}>
<View style={styles.container}>
{!imageUri && (<MaterialCommunityIcons color="#004982" name="camera" size={50}/>)}
{imageUri  && <Image source={{uri:imageUri}} style={{ width:100 , height:100}}  />}
</View>
</TouchableWithoutFeedback>    
);
}

export default ImageInput;

const styles = StyleSheet.create({
container:{
    backgroundColor:"#f4f4f4",
    borderRadius:15,
    height:100,
    width:100,
    overflow:"hidden",
    justifyContent:"center",
    alignItems:"center",
    marginRight:5
    
}
})