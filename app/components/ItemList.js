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
                    <View style={{flexDirection:"column"}}>
                    <AppText style={styles.listerName} >{title}</AppText>
                    {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>   }
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
        marginLeft:10,
 
    },
    listerName:{
        fontSize :20,
        marginRight:5


    },
    subtitle:{
        fontSize:15,
        marginRight:5

        
    },
    itemContainer:{
        paddingTop:5,
        paddingBottom:5,
        flexDirection:"row-reverse",
        alignItems:"center",
        marginLeft:5

    }

})

export default ItemList;