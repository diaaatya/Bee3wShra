import React from 'react';
import {StyleSheet,Image} from 'react-native'
import {Formik} from 'formik'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
function LoginScreen(props) {
    return (
       <Screen>
           <Image style={styles.LogoStyle} source={require("../assets/logo.png")} />
           <Formik
           initialValues={{email : '' , password:''}}
           onSubmit = {values=> console.log({values})}
           >
             {({handleChange, handleSubmit})=>(
                 <>
                    <AppTextInput 
                    style={styles.textStyle}
                    icon="email"
                    onChangeText= {handleChange("email")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Email"
                    />
                    <AppTextInput
                    style={styles.textStyle}
                    icon="lock"
                    onChangeText= {handleChange("password")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                    />
                    <AppButton title="Login" onPress={handleSubmit}/>
                 </>
             )}  
           </Formik>
          
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