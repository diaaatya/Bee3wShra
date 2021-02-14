import React from 'react';
import {View , StyleSheet} from 'react-native'
import ImageInputList from '../ImageInputList';
import AppErrorMessage from './AppErrorMessage';
import {useFormikContext} from 'formik';

function FormImagePicker({name}) {
    const {setFieldValue,errors,touched,values} = useFormikContext();
    const imageUris =values[name];

    const handleAdd = uri =>{
        setFieldValue (name,[...imageUris , uri]);
      }
      const handleRemove = uri =>{
        setFieldValue(name, imageUris.filter(imageUri => imageUri != uri ));
      }
      
return (
<>    
<ImageInputList imageUris={values[name]}
onAddImage={handleAdd}
onRemoveImage={handleRemove}
/>
<AppErrorMessage error={errors[name]} visible={touched[name]} />

</>
    );
}

export default FormImagePicker;

const styles = StyleSheet.create({

})