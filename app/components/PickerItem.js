import React from 'react';
import { TouchableOpacity  , StyleSheet} from 'react-native';
import AppText from './AppText';

function PickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.PickerText} >
                {item.lable}
            </AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    PickerText:{
        padding:10,
        justifyContent:"center",
        textAlign:"center",
        backgroundColor:"#f2f3f4",
        borderColor:"black",
        borderRadius:15,
        margin:10,
        borderWidth:2

    }
})
export default PickerItem;