// redux/customerName/type.ts
export interface CustomerName {
  id: number;
  firstname: string;
  lastname: string;
  created_at: string;
  updated_at: string;
}

export interface CustomerNameState {
  data: CustomerName[];
  loading: boolean;
  error: string | null;
}

export enum CustomerNameActionTypes {
  FETCH_CUSTOMER_NAMES_REQUEST = 'FETCH_CUSTOMER_NAMES_REQUEST',
  FETCH_CUSTOMER_NAMES_SUCCESS = 'FETCH_CUSTOMER_NAMES_SUCCESS',
  FETCH_CUSTOMER_NAMES_FAILURE = 'FETCH_CUSTOMER_NAMES_FAILURE',
  UPDATE_CUSTOMER_NAMES_REQUEST = 'UPDATE_CUSTOMER_NAMES_REQUEST',
  UPDATE_CUSTOMER_NAMES_SUCCESS = 'UPDATE_CUSTOMER_NAMES_SUCCESS',
  UPDATE_CUSTOMER_NAMES_FAILURE = 'UPDATE_CUSTOMER_NAMES_FAILURE',
}
export type CustomerNameAction =
  | { type: CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_REQUEST }
  | {
      type: CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_SUCCESS;
      payload: CustomerName[];
    }
  | {
      type: CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_FAILURE;
      payload: string;
    }
  | { type: CustomerNameActionTypes.UPDATE_CUSTOMER_NAMES_REQUEST }
  | {
      type: CustomerNameActionTypes.UPDATE_CUSTOMER_NAMES_SUCCESS;
      payload: CustomerName[];
    }
  | {
      type: CustomerNameActionTypes.UPDATE_CUSTOMER_NAMES_FAILURE;
      payload: string;
    };
