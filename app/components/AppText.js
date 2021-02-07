import React from 'react';
import { Text,StyleSheet ,View, Platform} from 'react-native';

function AppText({children , style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily:Platform.OS === "android" ? "serif" : "sens"
    }
})

export default AppText;