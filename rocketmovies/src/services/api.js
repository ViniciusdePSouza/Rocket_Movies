import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://vini-rocketmovies.herokuapp.com'
})