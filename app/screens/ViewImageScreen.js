import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


function ViewImageScreen(props) {
    return (
     <View  style={styles.container} >
        <View style={styles.closeButton}>
        <MaterialCommunityIcons name="window-close" size={40} color="gold" />
        </View>
        <View style={styles.nextButton}>
        <MaterialCommunityIcons name="trash-can-outline" size={40} color="gold" />

        </View>
        <Image resizeMode="contain" source={require("../assets/item2.jpg") }style={styles.imageBack}></Image>
    </View>  
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        


    },
    imageBack:{
        width:"100%",
        height:"100%",


    },
    closeButton:{
     
        position:"absolute",
        top:35,
        right:10,



        
    },
    nextButton:{

        position:"absolute",
        top:35,
        left:10,

    },

})

export default ViewImageScreen;