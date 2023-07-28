import axios from 'axios';
const fetcher = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export {fetcher};
