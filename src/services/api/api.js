import axios from "axios";

const api = axios.create({ baseURL: "//focagram.herokuapp.com"});

export const login = async data => {
  return api.post('/auth/login', data);
};