import React from 'react';
import {View , StyleSheet} from 'react-native'
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [],onAddImage,onRemoveImage}) {
return (
<View style={styles.container}>
{imageUris.map((uri) => (
 <View style={styles.imageWrap}>
<ImageInput 
key={uri}
imageUri={uri}
onChangeImage={ ()=>  onRemoveImage(uri)}
/>   
  </View>      
))}
<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
</View>
)};

export default ImageInputList;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row-reverse"
    },
    imageWrap:{
        marginLeft:5
    }
})