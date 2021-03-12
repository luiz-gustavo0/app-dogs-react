import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
});

export function userPost(body) {
  return {
    url: '/users',
    data: body,
  };
}

export default api;
