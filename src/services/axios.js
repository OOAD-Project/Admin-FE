import axios from 'axios';

const xios = axios
  .create({
    timeout: 5000,
    baseURL: '/'
  });

export default xios;
