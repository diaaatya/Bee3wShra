import React from 'react';
import {StyleSheet,Image} from 'react-native'
import {Formik, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField';
import FormSubmitButton from '../components/FormSubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password")
})

function LoginScreen(props) {
    return (
       <Screen>
           <Image style={styles.LogoStyle} source={require("../assets/logo.png")} />
           <AppForm
           initialValues={{email : '' , password:''}}
           onSubmit = {values=> console.log({values})}
           validationSchema={validationSchema}
           >
                <AppFormField 
                    name="email"
                    style={styles.textStyle}
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    />
                <AppFormField
                    name="password"
                    style={styles.textStyle}
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                    />
                <FormSubmitButton title="Login" />
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
export default LoginScreen;