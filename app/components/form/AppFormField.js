import React from 'react';
import {useFormikContext} from 'formik'
import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';
function AppFormField({name , ...otherProps}) {
    const {handleChange,   errors , setFieldTouched,touched} = useFormikContext();
    return (
        <>
        <AppTextInput 
                    
                    onBlur = {()=>setFieldTouched(name)}
                    onChangeText= {handleChange(name)}
                    {...otherProps}
                    />
                    <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;