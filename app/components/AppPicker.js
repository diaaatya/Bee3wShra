import React, { useState } from 'react';
import { Text, View ,StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({icon ,items,placeholder}) {
    const [modalVisble, setModalVisble] = useState("false");
    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModalVisble(true)}>
        <View style={styles.container}>
           {icon && <MaterialCommunityIcons style={styles.iconStyle}  name={icon} color={"#dadedf"}  size={35}/>}
           <AppText style={styles.textStyle} >{placeholder}</AppText> 
           <MaterialCommunityIcons style={styles.iconStyle}  name='chevron-down' color={"#dadedf"}  size={35}/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisble} animationType="slide">
            <Button title="close "onPress={()=> setModalVisble(false)}></Button>
            <FlatList
                data={items}
                keyExtractor={item=> item.value.toString()}
                renderItem={({item})=>
                <PickerItem  lable={item.lable} onPress={()=> console.log(item)} />
            }
            />
        </Modal>
        </>    
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

    },
    textStyle:{
        
        flex: 1,
    },
    iconStyle:{
        justifyContent:'center',
        marginHorizontal:15

    }
 
})

export default AppPicker;