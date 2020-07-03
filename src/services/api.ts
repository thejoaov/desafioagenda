import axios from 'axios';

const api = axios.create({
  baseURL: 'https://frontend-test.agendaedu.com/api',
});

export default api;
