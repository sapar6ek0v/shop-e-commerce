import axios from 'axios';

export const API_URL = 'https://fakestoreapi.com';

export const baseAxios = axios.create({
  baseURL: API_URL,
});
