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

        justifyContent:"center",
        fontSize:18,
    },
    container:{
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:15,
        flexWrap:"wrap"
    }
})
export default CategoryPickerItem;