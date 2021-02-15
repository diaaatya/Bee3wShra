import React from 'react';
import {View , StyleSheet, Text} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({onPress}) {
return (
<TouchableOpacity onPress={onPress}>
<View style={styles.container}>
<MaterialCommunityIcons name="plus-circle" size={25} color="white" />
</View>
</TouchableOpacity> 
);
}

export default NewListingButton;

const styles = StyleSheet.create({
container:{
    backgroundColor:"gold",
    height:50,
    width:50,
    borderRadius:25,
    bottom:10,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center"

}
})