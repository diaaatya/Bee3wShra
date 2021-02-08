import React from 'react';
import { FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';


const   listings=[ {id:1,titel : "diaa", subtitle : "item2" ,image : require('../assets/ps4.jpg')} ,
                    {id:2,titel : "diaa", subtitle : "item2" ,image : require('../assets/ps4.jpg')} ,
                    {id:3,titel : "diaa", subtitle : "item2" ,image : require('../assets/ps4.jpg')} ]   
function ItemListingScreen(props) {
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
                />
            }
            />


        </Screen>
    );
}

export default ItemListingScreen;