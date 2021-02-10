import React from 'react';
import {StyleSheet,Image} from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import {AppForm,AppFormField,AppFormPicker,FormSubmitButton} from '../components/form'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description : Yup.string().label("Description"),
    catagory: Yup.object().required().nullable().label("Catagory")
})

const categories = [
    {lable: "furnitur" , value:1},
    {lable: "clothings" , value:2},
    {lable: "electronics" , value:3},
];

function ListngEditScreen(props) {
    return (
       <Screen>
           <AppForm
           initialValues={{
               title :"", 
               price:"",
               description:"",
               catagory:null,
            }}
            onSubmit = {values=> console.log({values})}    
            validationSchema={validationSchema}
           >
            <AppFormField 
            icon="format-title"
            maxLength={255} name="title" placeholder={"Title"} />    
            <AppFormField
                    icon="currency-usd-circle"
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    />
                 
                    <AppFormPicker
                    
                    items={categories}
                    name="catagory"
                    placeholder="Category"
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
    }
    
})
export default ListngEditScreen;