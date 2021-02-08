import React from 'react';
import { View ,StyleSheet} from 'react-native';


function WideSeprator(props) {
     return (
    <View style={styles.ItemSeprator}>

    </View>
);
}
const styles = StyleSheet.create({
ItemSeprator:{
    width:"100%",
    height:70,
    backgroundColor:"#f8f8ff",

    
}
})

export default WideSeprator;