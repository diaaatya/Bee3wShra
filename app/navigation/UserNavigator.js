import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import UserScreen from '../screens/UserScreen';
import MessagesScreen from '../screens/MessagesScreen'

const Stack =createStackNavigator();

const UserNavigator = () =>(
 <Stack.Navigator>
     <Stack.Screen name="UserListing" component={UserScreen} />
     <Stack.Screen name="Messages" component={MessagesScreen} />
 </Stack.Navigator>
);

export default UserNavigator;