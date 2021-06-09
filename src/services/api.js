import axios from 'axios';

// key 90d14b3f4ece7f5aa0b90b9f3bc2dc4c78f78819

// base url: https://api-ssl.bitly.com/v4

export const key = '90d14b3f4ece7f5aa0b90b9f3bc2dc4c78f78819';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
});

export default api;
