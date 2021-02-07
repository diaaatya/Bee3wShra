import React from 'react';
import { Image, View ,StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components/AppText';
import ItemList from '../components/ItemList';
import colors from '../config/colors';

function ListingScreen(props) {
    return (
    <View >
        <Image style={styles.image1} source={require('../assets/ps4.jpg')}></Image>
        <View style={styles.listiing}>
        <AppText style={styles.title}>ps4 in good condtion</AppText>
        <AppText style={styles.price  }>price 100</AppText>
        <ItemList></ItemList>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
   listiing:{
       padding : 10
   } ,
   price:{
    height:100,
    fontSize:20,
    color: colors.secondary,
    
   },
   title:{
       fontSize:24,
       fontWeight:"500",
       color:colors.primary,
       marginBottom:5
   }
   ,
    image1:{
    width:"100%",
    height:200


}    
})

export default ListingScreen;