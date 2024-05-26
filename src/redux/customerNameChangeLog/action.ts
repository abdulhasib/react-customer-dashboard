// redux/customerNameChangeLog/action.ts
import { Dispatch } from 'redux';
import { fetchCustomerNameChangeLogsByCustomerName as fetchCustomerNameChangeLogsByCustomerNameAPI } from '../../service/api';
import {
  CustomerNameChangeLogByCustomerNameActionTypes,
  CustomerNameChangeLogByCustomerNameAction,
  CustomerNameChangeLogByCustomerName,
} from './type';

import formatCustomerNameChangeLogByCustomerName from '../../util/formatCustomerNameChangeLogByCustomerName';

// Action Creators
const fetchCustomerNameChangeLogsByCustomerNameRequest = () => ({
  type: CustomerNameChangeLogByCustomerNameActionTypes.FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_REQUEST,
});

const fetchCustomerNameChangeLogsByCustomerNameSuccess = (
  customerNameChangeLogByCustomerName: CustomerNameChangeLogByCustomerName[]
) => ({
  type: CustomerNameChangeLogByCustomerNameActionTypes.FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_SUCCESS,
  payload: customerNameChangeLogByCustomerName,
});

const fetchCustomerNameChangeLogsByCustomerNameFailure = (error: string) => ({
  type: CustomerNameChangeLogByCustomerNameActionTypes.FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_FAILURE,
  payload: error,
});

// Async Action Creator (Thunk)
export const fetchCustomerNameChangeLogsByCustomerName = (customerNameId) => {
  return async (
    dispatch: Dispatch<CustomerNameChangeLogByCustomerNameAction>
  ) => {
    dispatch(fetchCustomerNameChangeLogsByCustomerNameRequest());
    try {
      const customerNameChangeLogByCustomerName =
        await fetchCustomerNameChangeLogsByCustomerNameAPI(customerNameId);
      const formattedCustomerNameChangeLogByCustomerName =
        formatCustomerNameChangeLogByCustomerName(
          customerNameChangeLogByCustomerName
        );
      console.log(formattedCustomerNameChangeLogByCustomerName);
      dispatch(
        fetchCustomerNameChangeLogsByCustomerNameSuccess(
          formattedCustomerNameChangeLogByCustomerName
        )
      );
    } catch (error) {
      dispatch(fetchCustomerNameChangeLogsByCustomerNameFailure(error.message));
    }
  };
};
