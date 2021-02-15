import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ListngEditScreen from '../screens/ListngEditScreen';
import FeedNavigator from './FeedNavigator';
import UserNavigator from './UserNavigator';
import NewListingButton from './NewListingButton';
const Tab =createBottomTabNavigator();

const ApppNavigator = () =>(
    <Tab.Navigator
    
    tabBarOptions={{

        inactiveBackgroundColor:"white",
        activeBackgroundColor:"white",
        activeTintColor:"dodgerblue",
        labelStyle:{fontSize:15},
        style:{
            borderRadius:20,
            overflow:"visible",
            height:70,
        }


    }}
    >
        <Tab.Screen 
        options={{
            tabBarIcon:({color,size})=> <MaterialCommunityIcons name="home" color={color} size={40} />,
        }}
        name="Listing"  component={FeedNavigator}
        />
        <Tab.Screen name="Edit"  component={ListngEditScreen}
             options={ ({navigation}) => ({
                tabBarIcon:({color,size})=> <MaterialCommunityIcons name="home" color={color} size={20} />,
                tabBarButton: ()=> <NewListingButton onPress={() => navigation.navigate("Edit")}/>
            })}
        />
        <Tab.Screen
          options={{
            tabBarIcon:({color,size})=> <MaterialCommunityIcons name="account" color={color} size={40} />,
        }}
        name="Account"  component={UserNavigator}/>
    </Tab.Navigator>
);

export default ApppNavigator;