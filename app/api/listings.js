import client from './client'

const getListings = () => client.get('/');

export default {
    getListings,
};