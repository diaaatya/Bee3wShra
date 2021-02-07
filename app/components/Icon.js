import React from 'react';

import { StyleSheet,View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


function Icon({name,size = 40,background="#000",iconColor="#fff"}) {
    return (
        <View style={
            {
                width:size,
                height:size,
                borderRadius:size/2,
                backgroundColor:background,
                justifyContent:"center",
                alignItems:'center'
            }
        }>
                    <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor} />
        </View>
    );
}
const styles = StyleSheet.create({
    IconStyle:{


    }
})
export default Icon;