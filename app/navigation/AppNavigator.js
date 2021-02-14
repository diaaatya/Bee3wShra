import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ItemListingScreen from '../screens/ItemListingScreen';
import ListngEditScreen from '../screens/ListngEditScreen';
import UserScreen from '../screens/UserScreen';
import FeedNavigator from './FeedNavigator';
import UserNavigator from './UserNavigator';
const Tab =createBottomTabNavigator();

const ApppNavigator = () =>(
    <Tab.Navigator>
        <Tab.Screen name="Listing"  component={FeedNavigator}/>
        <Tab.Screen name="Edit"  component={ListngEditScreen}/>
        <Tab.Screen name="Account"  component={UserNavigator}/>
    </Tab.Navigator>
);

export default ApppNavigator;