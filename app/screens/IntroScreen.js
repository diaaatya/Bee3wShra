import React from 'react';
import { ImageBackground, StyleSheet ,Image,Text,View} from 'react-native';
import AppButton from "../components/AppButton"
function introScreen(props) {
    return (
    <ImageBackground 
    blurRadius={3}
    style={styles.images} source={require("../assets/back2.jpg")}>
        <View style={styles.imagesContainer}>
        <Image style={styles.imagex} source={require("../assets/logo.png")}></Image>
         <Image  resizeMode="center" style={styles.slogan}  source={require("../assets/slogan.png")}></Image>
        </View>
        <View style={styles.ButtonContainer}>
        <AppButton title="login" onPress={()=> console.log ("login")}/>
        <AppButton title="register"  color="secondary" onPress={()=> console.log ("login")}/>
        </View>
        
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
    images:{
        
        flex:1 ,
        alignItems:"center",
        width:"100%",
        height:"100%",
        flexDirection:"column-reverse",
       

    },
    slogan:{
      width:"100%",
      height:100,
      justifyContent:"center"
       
    },
    imagex:{
        
        width:150,
        height:150,
        justifyContent:"center"
     
    },
    imagesContainer:{
        width:"100%",
        paddingTop: 70,
        position:"absolute",
        top:20,
        alignItems:'center',
        justifyContent:'center'
        
    },
    ButtonContainer:{
    padding:15,
    width:"100%"
    }
})

export default introScreen;