import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import AppText from './AppText';

function ItemList(props) {
    return (
        <View style={{flexDirection:"row-reverse"}}>
            <Image style={styles.userImage} source={require("../assets/user2.jpg")} ></Image>
            <View style={{flexDirection:"column"}}>
             <AppText style={styles.listerName} >Diaa Atya</AppText>
             <AppText style={styles.subtitle}>Certifeid seller</AppText>   
            </View>
        </View>
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
        fontSize :20
    },
    subtitle:{
        fontSize:15,
        height:200,
    }

})

export default ItemList;