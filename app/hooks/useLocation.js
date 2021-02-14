import React, { useState,useEffect } from 'react';
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location,setLocation] = useState();
    const getLoctaion = async() =>{
        const {granted}= await Location.requestPermissionsAsync();
        if (!granted) return;
        try {
            const {coords : {latitude,longitude}} = await Location.getCurrentPositionAsync();
            setLocation({latitude,longitude}); 
        } catch (error) {
            console.log(error)
        }
}
    useEffect( ()=>{
      getLoctaion();
    },[]);
    return location;
};