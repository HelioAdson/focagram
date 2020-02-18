import axios from "axios";

const api = axios.create({ baseURL: "//focagram.herokuapp.com"});

export const logout = () => {
  localStorage.removeItem('token');
  api.defaults.headers['Authorization'] = '';
}

export const login = async data => {
  const response = await api.post('/auth/login', data);
  localStorage.setItem('token', response.data.token);
  api.defaults.headers['Authorization'] = response.data.token;
};

export const register = async data => {
  return api.post('/users', data);
}