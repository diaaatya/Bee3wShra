import React from 'react';
import { View, StyleSheet , Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from './AppText';

function ItemList({title, subtitle,image,ImageComp, onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableHighlight
                underlayColor={"#F2f3f4"} 
                onPress={onPress}>
                <View style={styles.itemContainer}>
                    {image && <Image style={styles.userImage} source={image} ></Image>}
                    {ImageComp}
                    <View style={styles.textCont}>
                    <AppText style={styles.listerName}
                    numberOfLines={1}
                    >{title}</AppText>
                    {subtitle && <AppText  numberOfLines={3} style={styles.subtitle}>{subtitle}</AppText>   }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>


    );
}
const styles = StyleSheet.create({
    userImage:{
        width:75,
        height:75,
        borderRadius:38,
        marginLeft:5,
 
    },
    listerName:{
        fontSize :20,
    },
    subtitle:{
        fontSize:15,
        color:"#28231d"

        
    },
    itemContainer:{
        paddingTop:5,
        paddingBottom:5,
        flexDirection:"row-reverse",
        alignItems:"stretch",
        paddingRight:20

    },
    textCont:{
     width:"80%",
     alignItems:"flex-end"
    }

})

export default ItemList;