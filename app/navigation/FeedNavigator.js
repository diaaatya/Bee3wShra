import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ItemListingScreen from '../screens/ItemListingScreen';
import ListingScreen from '../screens/ListingScreen';
const Stack =createStackNavigator();

const FeedNavigator = () =>(
 <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name="ItemListing" component={ItemListingScreen} />
     <Stack.Screen name="Listing" component={ListingScreen}/>
 </Stack.Navigator>
);

export default FeedNavigator;