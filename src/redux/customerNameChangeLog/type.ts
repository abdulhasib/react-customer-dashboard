// redux/customerNameChangeLog/type.ts
import { CustomerName } from '../customerName/type';

export interface CustomerNameChangeLog {
  id: number;
  data: {
    updatedValue: string;
    fieldname: string;
    previousValue: string;
  };
  user: {
    id: number;
    username: string;
  };
  created_at: string;
  updated_at: string;
}

export interface CustomerNameChangeLogByCustomerName extends CustomerName {
  customer_name_change_log: CustomerNameChangeLog[];
}

export interface CustomerNameChangeLogState {
  data: CustomerNameChangeLog[];
  dataByCustomerName: CustomerNameChangeLogByCustomerName[];
  loading: boolean;
  error: string | null;
}

export enum CustomerNameChangeLogByCustomerNameActionTypes {
  FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_REQUEST = 'FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_REQUEST',
  FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_SUCCESS = 'FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_SUCCESS',
  FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_FAILURE = 'FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_FAILURE',
}

export type CustomerNameChangeLogByCustomerNameAction =
  | { type: 'FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_REQUEST' }
  | {
      type: 'FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_SUCCESS';
      payload: CustomerNameChangeLogByCustomerName[];
    }
  | {
      type: 'FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_FAILURE';
      payload: string;
    };
