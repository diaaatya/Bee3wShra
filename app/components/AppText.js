import React from 'react';
import { Text,StyleSheet ,View, Platform} from 'react-native';

function AppText({children , style,...otherProps}) {
    return (

        <Text 
        
        style={[styles.text, style]}{...otherProps}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'left',
        fontFamily:Platform.OS === "android" ? "serif" : "sens"
    }
})

export default AppText;