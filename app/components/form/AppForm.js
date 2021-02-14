import React from 'react';
import {Formik} from  "formik"
import { View ,StyleSheet} from 'react-native';

function AppForm({initialValues,onSubmit,validationSchema,children}) {
    return (
        <Formik
           style = {styles.container}
           initialValues={initialValues}
           onSubmit = {onSubmit}
           validationSchema={validationSchema}
           >
                {()=>(
                  <>
                    {children}
                  </>  
                )
                }

           </Formik>
    );
}
const styles = StyleSheet.create({
container:{
  flexDirection:"row",
  justifyContent:"flex-start"
}
})

export default AppForm;