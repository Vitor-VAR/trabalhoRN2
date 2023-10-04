import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://65122785b8c6ce52b3955cc5.mockapi.io/api/loja',
});

export default api;
