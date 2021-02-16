import React, { useEffect } from 'react';
import {StyleSheet,Image} from 'react-native'
import * as Yup from 'yup'
import * as Location from 'expo-location';

import Screen from '../components/Screen'
import {AppForm,AppFormField,AppFormPicker,FormSubmitButton} from '../components/form'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/form/FormImagePicker';
import { useState } from 'react/cjs/react.development';
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description : Yup.string().label("Description"),
    catagory: Yup.object().required().nullable().label("Catagory"),
    images: Yup.array().min(1 , "Please select at least 1 image")
})

const categories = [
    {lable: "Furniture" , value:1 ,backgroundColor:"#ae7bdd", icon :"lamp"},
    {lable: "Fashion" , value:2,backgroundColor:"#ff0040", icon :"tshirt-v"},
    {lable: "Electronics" , value:3,backgroundColor:"#2c7f84", icon :"cellphone"},
    {lable: "Sports" , value:4 ,backgroundColor:"red", icon :"basketball"},
    {lable: "Books" , value:5,backgroundColor:"green", icon :"book-open-outline"},
    {lable: "Cars" , value:6,backgroundColor:"#1569C7", icon :"car"},
    {lable: "Tools" , value:7 ,backgroundColor:"#F87431", icon :"toolbox"},
    {lable: "Music" , value:8,backgroundColor:"#22133a", icon :"music"},
    {lable: "Games" , value:9,backgroundColor:"#C04000", icon :"gamepad-variant"},
];

function ListngEditScreen(props) {
    const location = useLocation();
    
    return (
       <Screen>
           <AppForm
           initialValues={{
               title :"", 
               price:"",
               description:"",
               catagory:null,
               images:[]
            }}
            onSubmit = {values=> console.log(values)}    
            validationSchema={validationSchema}
           >
            <FormImagePicker name="images"/>   
            <AppFormField 
            icon="format-title"
            maxLength={255} name="title" placeholder={"Title"} />    
            <AppFormField
                    icon="currency-usd-circle"
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width ={"50%"}

                    />
                 
                    <AppFormPicker
                    items={categories}
                    name="catagory"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width ="50%"

                    />
                    <AppFormField
                    icon="lead-pencil"
                    maxLength={255}
                    multiline={true}
                    numberOfLines={3}
                    name="description"
                    placeholder="Description"
                    />   

                <FormSubmitButton title="submit" />
           </AppForm>  
       </Screen>
    );
}
const styles = StyleSheet.create({
 
    LogoStyle:{
        justifyContent:"center",
        alignSelf:"center",
        width:200,
        height:200,
        marginBottom:100
    },
    textStyle:{
        marginBottom:5
    },

    
})
export default ListngEditScreen;