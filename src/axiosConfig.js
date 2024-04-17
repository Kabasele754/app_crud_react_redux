
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001', // Remplacez ceci par l'URL de votre API JSON Server
});

export default instance;
