import React from 'react';
import { Image, View ,StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import ItemList from '../components/ItemList';
import colors from '../config/colors';
import Screen from '../components/Screen'


function ListingScreen({route}) {
    const listnig = route.params;
    return (
    <Screen > 
        <Image style={styles.image1} source={listnig.image}></Image>
        <View style={styles.listiing}>
        <AppText style={styles.title}>{listnig.titel}</AppText>
        <AppText style={styles.price  }>{listnig.subtitle}</AppText>
        <ItemList 
        title= "Diaa Atya"
        subtitle= "certifeid user"
        image= {require('../assets/user2.jpg')}
        />
        </View>
    </Screen>
    );
}
const styles = StyleSheet.create({
   listiing:{
       padding : 10
   } ,
   price:{
    fontSize:20,
    color: colors.secondary,
    
   },
   title:{
       fontSize:24,
       fontWeight:"500",
       color:"black",
       marginBottom:5
   }
   ,
    image1:{
    width:"100%",
    height:200,
    borderRadius:20


}    
})

export default ListingScreen;