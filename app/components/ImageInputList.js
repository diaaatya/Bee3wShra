import React ,{useRef} from 'react';
import {View , StyleSheet, ScrollView} from 'react-native'
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [],onAddImage,onRemoveImage}) {
    const  scrollView =useRef();
return (
<View>
<ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()} >    
<View style={styles.container}>
{imageUris.map((uri) => (
 <View key={uri} style={styles.imageWrap}>
<ImageInput 

imageUri={uri}
onChangeImage={ ()=>  onRemoveImage(uri)}
/>   
  </View>      
))}
<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
</View>
</ScrollView>    
</View>    
)};

export default ImageInputList;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginBottom:10
    },
    imageWrap:{
        marginLeft:5
    }
})