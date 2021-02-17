import client from './client'

const getListings = () => client.get('/');




const addListing = async (listing) =>{
    
  
//    imageUpload(listing.images[0])
   const data =  new FormData();
   data.append('title',listing.title)
   data.append('price',listing.price)
   data.append('catagory',listing.catagory.value)
   data.append('description',listing.description)

   listing.images.forEach((image,index) => 
    
    data.append('images',{
        name:'image'+index,
        type:'image/jpeg',
        uri:  image
    }),
    );
    if (listing.location)
    data.append('location' , JSON.stringify(listing.location));
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }  
   
        return client.post('/listings', JSON.stringify(data) )
    
 
}

export default {
    addListing,
    getListings,
};