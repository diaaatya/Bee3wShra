import React , {useState}from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemList from '../components/ItemList';
import ListItemDelete from '../components/ListItemDelete';
import ListItemSeprator from '../components/ListItemSeprator';
import Screen from '../components/Screen'


const initialMessages = [
{ id: "1",title : "long long long very damn long title", descreption : "longlo  long long long very damn long title  long long long very damn long title  long long long very damn long title  long long long very damn long title  long long long very damn long title  long long long very damn long title  long long long very damn long title ", image : require('../assets/user2.jpg')},
{ id: "2",title : "t2", descreption : "d2", image : require('../assets/user2.jpg')},
{ id: "3",title : "t3", descreption : "d2", image : require('../assets/user2.jpg')}

]
function MessagesScreen(props) {
    const [messages,setMessages] =  useState(initialMessages);
    const [refreshing,setRefreshing]= useState(false);

    const handleDelete = message =>{
        setMessages(messages.filter((m)=> m.id !== message.id))
    }
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
        renderRightActions= {()=> <ListItemDelete onPress={()=> handleDelete(item)}/> }
        />}
        ItemSeparatorComponent={()=><ListItemSeprator/>}
        refreshing={refreshing}
        onRefresh={()=> {
            setMessages([
                { id: "3",title : "t3", descreption : "d2", image : require('../assets/user2.jpg')}
            ])
        }}
        />
      
    </Screen>
    );
}
const styles = StyleSheet.create({
 

})

export default MessagesScreen;