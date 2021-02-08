import React from 'react';
import { FlatList } from 'react-native';
import Card from '../components/Card';

const   listings=[ {id:1,titel : "item1", subtitle : "item2" ,image : require('../assets/ps4.jpg')} ,
                    {id:2,titel : "item1", subtitle : "item2" ,image : require('../assets/ps4.jpg')} ,
                    {id:3,titel : "item1", subtitle : "item2" ,image : require('../assets/ps4.jpg')} ]   
function ItemListingScreen(props) {
    return (
        <Screen>
            <FlatList
                date={listings}
                keyExtractor={listing => listing.id.toSting()}
                renderItem={({item})=> 
                <Card
                titel= {item.titel}
                subtitle={item.subtitle}
                images={item.image}
                />
            }
            />


        </Screen>
    );
}

export default ItemListingScreen;