import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://qr-challenge.herokuapp.com/api/v1',
});
