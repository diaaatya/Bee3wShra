import React from 'react';
import { SafeAreaView ,StyleSheet} from 'react-native';
import Constants from 'expo-constants'
function Screen({children,style}) {
    return (
        <SafeAreaView style={styles.SafeScreen}>
            {children}
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    SafeScreen:{
        paddingTop:Constants.statusBarHeight,
        paddingHorizontal:10,
        alignItems:"flex-end"
        


    }
})

export default Screen;