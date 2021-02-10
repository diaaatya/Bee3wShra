import React from 'react';
import {StyleSheet} from 'react-native'
import AppText from '../AppText'

function AppErrorMessage({error , visible}) {
    if (!visible||!error) return null;
    return (
        <AppText style={styles.errorMessage}>{error}</AppText>
    );
}
const styles = StyleSheet.create({
    errorMessage:{
    fontSize:15,
    color:"red",
    margin:5,
    paddingHorizontal:15
    }
})
export default AppErrorMessage;