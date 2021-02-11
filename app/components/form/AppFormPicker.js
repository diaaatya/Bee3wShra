import React from 'react';
import {useFormikContext} from "formik"
import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'

function AppFormPicker({items ,
    numberOfColumns,
    PickerItemComponent,
     name , 
     placeholder,
     width}) {
    const {setFieldValue,errors,touched,values} = useFormikContext();
    return (
        <>
        <AppPicker
        icon="apps"
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectedItem={(item)=>setFieldValue(name,item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        />
        <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;