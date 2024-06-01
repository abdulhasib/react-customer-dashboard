// src/service/auth.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const LOGIN_URL = `${BASE_URL}/auth/login`;
const REGISTER_URL = `${BASE_URL}/auth/register`;

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await axios.post(LOGIN_URL, { username, password });
  return response.data.token;
};

export const register = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await axios.post(REGISTER_URL, { username, password });
  return response.data.token;
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};
