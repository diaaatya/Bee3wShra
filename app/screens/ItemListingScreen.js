import React, { useState } from 'react';
import { ActivityIndicator, FlatList ,StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import routes from '../navigation/routes'
import listinApi from '../api/listings';
import { useEffect } from 'react';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';





function ItemListingScreen({navigation}) {
        const {data :listings , hasError , loading , request}= 
        useApi(listinApi.getListings);
     useEffect ( () => {
         try {
            request();
         } catch (error) {
             console.log(error)
         }
         
     },[] );

     
   
    return (
        <Screen>
            {hasError==true && 
            <>
            <AppText>can't connect to server</AppText>
            <AppButton title="Retry" onPress={request}/>
            </>}
                <ActivityIndicator animating={loading} size="large" color="gold"/>
             <FlatList
                data={listings}
                connslo
                keyExtractor={listings => listings.id.toString()}
                renderItem = {({item})=>
            <Card 
            title={item.title}
            subtitle={item.price}
            images={item.images[0]}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS ,item)}

            />
             }
    />
        </Screen>
    );
}
const styles = StyleSheet.create({

    
})
export default ItemListingScreen;