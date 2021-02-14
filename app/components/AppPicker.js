import React, { useState } from 'react';
import { Text, View ,StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import AppText from './AppText';
import PickerItem from './PickerItem';
import CategoryPickerItem from './CategoryPickerItem'


function AppPicker({
    icon ,
    selectedItem,
    numberOfColumns=1,
    PickerItemComponent = PickerItem,
    onSelectedItem,
    items,
    placeholder,
    width}) {
    const [modalVisble, setModalVisble] = useState("false");
    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setModalVisble(true)}>
        <View style={[styles.container,width]}>
           {icon && <MaterialCommunityIcons style={styles.iconStyle}  name={icon} color={"#dadedf"}  size={35}/>}
           <AppText style={styles.textStyle} >{selectedItem? selectedItem.lable : placeholder}</AppText> 
           <MaterialCommunityIcons style={styles.iconStyle}  name='chevron-down' color={"#dadedf"}  size={35}/>
        </View>
        </TouchableWithoutFeedback>
        <Modal   visible={modalVisble} animationType="slide">
            <Button title="close "onPress={()=> setModalVisble(false)}></Button>
            <FlatList
                 style={styles.flatlist}
                numColumns={numberOfColumns}
                data={items}
                keyExtractor={item=> item.value.toString()}
                renderItem={({item})=>
                <PickerItemComponent 
                 item= {item}
                 lable={item.lable} 
                 onPress={()=> {
                    setModalVisble(false);
                    onSelectedItem(item);
                }} />
            }
            />
        </Modal>
        </>    
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:50,
        backgroundColor:"#f2f2f4",
        borderRadius:25,
        alignItems:"center",
        marginBottom:10,
        paddingHorizontal:5

    },
    flatlist:{
        flexDirection:"row",
        height:50,
        backgroundColor:"#f2f2f4",
        borderRadius:25,
        marginBottom:10,
        paddingHorizontal:30

    },
    textStyle:{
        flex:1
     
    },
    iconStyle:{
        justifyContent:'center',
        marginLeft:10,
      
    }
 
})

export default AppPicker;