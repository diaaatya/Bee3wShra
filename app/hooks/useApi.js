import {useState} from 'react';

export default useApi = (apiFunc) =>{
    const [data,setData] = useState([]);
    const [hasError,sethasError]= useState(false);
    const [loading,setLoading] = useState(false);

    const request = async (...args)=>{
        setLoading(true)
        const response = await apiFunc(...args) ;
        setLoading(false)
        
        if (!response.ok) return sethasError(true);
         
        sethasError(false)
         setData(response.data);
     };
     return {data,hasError,loading , request };
};