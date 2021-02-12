import React from 'react';
import { TouchableOpacity  , StyleSheet} from 'react-native';
import AppText from './AppText';
import Icon from './Icon'
function CategoryPickerItem({item,onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon background={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.PickerText} >
                {item.lable}
            </AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    PickerText:{
        textAlign:"center",
        justifyContent:"center",
        fontSize:13,
    },
    container:{
        alignItems:"center",
        paddingVertical:15,
        paddingHorizontal:10,
    

 
    }
})
export default CategoryPickerItem;