import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import ItemList from '../components/ItemList';
import ListItemDelete from '../components/ListItemDelete';
import ListItemSeprator from '../components/ListItemSeprator';
import Screen from '../components/Screen'


const messages = [
{ id: "1",title : "t1", descreption : "d2", image : require('../assets/user2.jpg')},
{ id: "2",title : "t2", descreption : "d2", image : require('../assets/user2.jpg')},
{ id: "3",title : "t3", descreption : "d2", image : require('../assets/user2.jpg')}

]
function MessagesScreen(props) {
    return (
    <Screen>
     <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem = {({item})=>
        <ItemList
        title = {item.title}
        subtitle={item.descreption}
        image={item.image}
        onPress={()=> console.log("message selected", item)}
        renderRightActions= {()=> <ListItemDelete/>}
        />}
        ItemSeparatorComponent={()=><ListItemSeprator/>}
        ></FlatList>
    </Screen>
    );
}
const styles = StyleSheet.create({
 

})

export default MessagesScreen;