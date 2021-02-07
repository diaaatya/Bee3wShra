import React from 'react';
import { View,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDelete({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.listDelete}> 
        <View >
            <MaterialCommunityIcons name="trash-can-outline" size={40} color="white" />
        </View>
        </TouchableWithoutFeedback>
            
    );
}
const styles = StyleSheet.create({
    listDelete:{
        width:70,
        height:"100%",
        backgroundColor:"#e32636",
        justifyContent:"center",
        alignItems:"center"

    }
})

export default ListItemDelete;