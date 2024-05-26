// redux/customerName/action.ts

import { Dispatch } from 'redux';
import {
  fetchCustomerNames as fetchCustomerNamesAPI,
  updateCustomerName as updateCustomerNameAPI,
} from '../../service/api';
import {
  CustomerNameActionTypes,
  CustomerNameAction,
  CustomerName,
} from './type';

import formatCustomerName from '../../util/formatCustomerName';

export const fetchCustomerNamesRequest = () => ({
  type: CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_REQUEST,
});

export const fetchCustomerNamesSuccess = (customerNames: CustomerName[]) => ({
  type: CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_SUCCESS,
  payload: customerNames,
});

export const fetchCustomerNamesFailure = (error: string) => ({
  type: CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_FAILURE,
  payload: error,
});

export const updateCustomerNameRequest = () => ({
  type: CustomerNameActionTypes.UPDATE_CUSTOMER_NAMES_REQUEST,
});

export const updateCustomerNameSuccess = (customerName: CustomerName) => ({
  type: CustomerNameActionTypes.UPDATE_CUSTOMER_NAMES_SUCCESS,
  payload: customerName,
});

export const updateCustomerNameFailure = (error: string) => ({
  type: CustomerNameActionTypes.UPDATE_CUSTOMER_NAME_FAILURE,
  payload: error,
});

export const fetchCustomerNames = () => {
  return async (dispatch: Dispatch<CustomerNameAction>) => {
    console.log('dispacth');
    dispatch(fetchCustomerNamesRequest());
    try {
      const customerNames = await fetchCustomerNamesAPI();
      const formattedCustomerNames = formatCustomerName(customerNames);
      dispatch(fetchCustomerNamesSuccess(formattedCustomerNames));
    } catch (error) {
      dispatch(fetchCustomerNamesFailure(error.message));
    }
  };
};

export const updateCustomerName = (
  id: number,
  newData: Partial<CustomerName>
) => {
  return async (dispatch: Dispatch<CustomerNameAction>) => {
    dispatch(updateCustomerNameRequest());
    try {
      const updatedCustomerName = await updateCustomerNameAPI(id, newData);
      dispatch(updateCustomerNameSuccess(updatedCustomerName));
    } catch (error) {
      dispatch(updateCustomerNameFailure(error.message));
    }
  };
};
