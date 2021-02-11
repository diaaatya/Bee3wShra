import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function AppTextInput({icon , style,width="100%",...otherProps}) {
    return (
        <View style={[styles.container,{width}]}>
           {icon && <MaterialCommunityIcons style={styles.iconStyle}  name={icon} color={"#dadedf"}  size={35}/>}
            <TextInput style={styles.textStyle } {...otherProps}></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row-reverse",
        height:50,
        backgroundColor:"#f2f2f4",
        borderRadius:25,
        alignItems:"center",
        marginBottom:10,
        width:"50%",
        marginHorizontal:5

    },
    textStyle:{
        fontSize:20,
        width:"80%",
        textAlign:"left"

    },
    iconStyle:{
        justifyContent:'center',
        marginHorizontal:15

    }
 
})

export default AppTextInput;