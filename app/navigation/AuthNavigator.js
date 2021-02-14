import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../config/colors'

import IntroScreen from '../screens/IntroScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack =createStackNavigator();
const AuthNavigator = ()=>(
    <Stack.Navigator screenOptions={{
        
        headerTintColor:"dodgerblue"
    }}>
        <Stack.Screen 
        options={{
            headerShown:false
        }}
        name='Welcome' component={IntroScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
); 
export default  AuthNavigator;