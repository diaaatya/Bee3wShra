import React from 'react';
import { SafeAreaView ,StyleSheet} from 'react-native';
import Constants from 'expo-constants'
function Screen({children}) {
    return (
        <SafeAreaView style={styles.SafeScreen}>
            {children}
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    SafeScreen:{
        paddingTop:Constants.statusBarHeight
    }
})

export default Screen;