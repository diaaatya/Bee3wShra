import React from 'react';
import { View,StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function ListItemDelete(props) {
    return (
        <View style={styles.listDelete}>
            <MaterialCommunityIcons name="trash-can-outline" size={40} color="white" />
        </View>
    );
}
const styles = StyleSheet.create({
    listDelete:{
        width:70,
        backgroundColor:"#ff3333",
        justifyContent:"center",
        alignItems:"center"

    }
})

export default ListItemDelete;