import React from 'react';

import { StyleSheet,  View,Platform ,FlatList} from 'react-native';
import Icon from '../components/Icon';

import ItemList from '../components/ItemList';
import ListItemSeprator from '../components/ListItemSeprator';
import WideSeprator from '../components/WideSeprator';
import Screen from '../components/Screen'

const menuItems = [
    {title:"Messages Option",subtitle:"select your messages option",icon : {name:"email", color:"white", background:"red"} , navigation:"Messages"},
    {title:"Acount Setting",icon : {name:"account-settings-outline", color:"white",background:"#ab274f"}},
    {title:"Security",subtitle:"select your securit prefrance",icon : {name:"lock-plus", color:"white",background:"#ffbf00"}},
]
function UserScreen({navigation}) {
    return (
    <Screen>
    <ItemList 
        title= "Diaa Atya"
        subtitle="Email: Diaa.Atya@hotmail.com"
        image= {require('../assets/user2.jpg')}
    />   
    <WideSeprator/>
    <FlatList
    data={menuItems}    
    keyExtractor={menuItems=> menuItems.title}
    renderItem={({item})=> <ItemList
        title={item.title}
        subtitle={item.subtitle}
        ImageComp={<Icon name={item.icon.name} background={item.icon.background}/>}
        onPress={()=> navigation.navigate(item.navigation)}
    />}
    ItemSeparatorComponent={()=><ListItemSeprator/>}

    />


   
      <WideSeprator/>
      <ItemList 
        title= "Logout"
        ImageComp = {<Icon name={"logout" } background="#ffbf00"/>}
        onPress={()=>console.log("pressed")}

    />  
    </Screen>    
    );
}
const styles = StyleSheet.create({
    
})
export default UserScreen;