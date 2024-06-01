// src/services/api.ts
import axios, { AxiosResponse } from 'axios';
import { getToken } from './auth';
import { CustomerName } from '../redux/customerName/type';
import { CustomerNameChangeLogByCustomerName } from '../redux/customerNameChangeLog/type';

const BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchCustomerNames = async (): Promise<CustomerName[]> => {
  try {
    const response: AxiosResponse<any> = await api.get('/customer/name');
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch customer names from the API');
  }
};

export const fetchCustomerNameChangeLogsByCustomerName = async (
  customerNameId: number
): Promise<CustomerNameChangeLogByCustomerName> => {
  try {
    const response: AxiosResponse<any> = await api.get(
      `/customer/name-change-log/by-customer-name/${customerNameId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch customer name change logs from the API');
  }
};

export const updateCustomerName = async (
  id: number,
  newData: Partial<CustomerName>
): Promise<CustomerName> => {
  try {
    const response: AxiosResponse<any> = await api.patch(
      `/customer/name/${id}`,
      newData
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update customer name');
  }
};
