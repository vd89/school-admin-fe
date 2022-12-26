import axios from 'axios';

const appApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  timeout: 1000 * 5,
});

export default appApi;
