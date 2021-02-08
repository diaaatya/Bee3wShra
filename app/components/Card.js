import React from 'react';
import { View ,StyleSheet, Image} from 'react-native';
import AppText from './AppText';

function Card({title, subtitle,images}) {
    return (
 <View style={styles.card}>
     <Image style={styles.image} source={images}/>
     <AppText style={styles.title}>{title}</AppText>
     <AppText style={styles.subtitle}>{subtitle}</AppText>

 </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"#fff",
        marginBottom:20,
        overflow:"hidden",
        
    },
    image:{
        width:"100%",
        height:200,
        marginBottom:15
    },
    title:{
        marginBottom:8,
        fontWeight: "bold",
        paddingLeft:10,
        color:"red"

    },
    subtitle:{
        color:"green",
        fontWeight:"bold",
        paddingLeft:10
    }

})

export default Card;