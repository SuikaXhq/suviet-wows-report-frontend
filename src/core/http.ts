import axios from 'axios';

export const httpService = axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
    responseType: 'json',
});
