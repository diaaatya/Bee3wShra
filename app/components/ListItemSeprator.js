import React from 'react';
import { View ,StyleSheet} from 'react-native';

function ListItemSeprator(props) {
    return (
        <View style={styles.ItemSeprator}>

        </View>
    );
}
const styles = StyleSheet.create({
    ItemSeprator:{
        width:"100%",
        height:1,
        backgroundColor:"#dadedf",

        
    }
})

export default ListItemSeprator;