import axios from 'axios';

const api = axios.create({
    baseURL: 'http://servidorpermutei-com.umbler.net'
})

export default api;