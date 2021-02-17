import client from './client'

const getListings = () => client.get('/');

const imageUpload = (image) =>{
    let newfile ={
        uri  : image,
        type : "test/jpg",
        name : "test-unoqe-name12"
    }
    const data = new FormData()
    data.append('file',newfile)
    data.append('upload_preset','diaamond')
    data.append('cloud_name','diaamondsoft')
    fetch("https://api.cloudinary.com/v1_1/diaamondsoft/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data =>{
      console.log(data)
    })
  }

const addListing = listing =>{
   const data =  new FormData();
   data.append('title',listing.title)
   data.append('price',listing.price)
   data.append('catagory',listing.catagory.value)
   data.append('description',listing.description)
   listing.images.forEach((image,index) => 
 
    data.append('images',{
        name:'image'+index,
        type:'image/jpeg',
        uri:image
    }),
    );

    console.log(listing.images[0])
    imageUpload(listing.images[0])
    if (listing.location)
    data.append('location' , JSON.stringify(listing.location));
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    return client.post('/listings', JSON.stringify(data) ,{headers})
}

export default {
    addListing,
    getListings,
};