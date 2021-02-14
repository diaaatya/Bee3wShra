import React from 'react';
import { View ,StyleSheet, Image} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors.js'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Card({title, subtitle,images,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={images}/>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"#f8f8ff",
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
        paddingRight:10,
        color:Colors.primary,
        fontSize:18,
        position:"relative"

    },
    subtitle:{
        color:"gold",
        fontWeight:"bold",
        paddingLeft:10,
        fontSize:16

    }
})

export default Card;