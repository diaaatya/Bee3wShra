import React from 'react';
import { FlatList ,StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';


const   listings=[ {id:1,titel : "بلاى ستيشن 4 فى حاله جيدة", subtitle : "2000" ,image : require('../assets/ps4.jpg')} ,
                    {id:2,titel : "laptop 16 gb ram", subtitle : "5000 LE" ,image : require('../assets/laptop22.jpg')} ,
                    {id:3,titel : "wacom tablet", subtitle : "2300 LE" ,image : require('../assets/wacom.jpg')} ]   
function ItemListingScreen({navigation}) {
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={listings => listings.id.toString()}
                renderItem = {({item})=>
                <Card
                title= {item.titel}
                subtitle={item.subtitle}
                images={item.image}
                onPress={() => navigation.navigate("Listing" ,item)}
                />
            }
            />


        </Screen>
    );
}
const styles = StyleSheet.create({

    
})
export default ItemListingScreen;