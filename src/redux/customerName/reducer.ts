// redux/customerName/reducer.ts

import {
  CustomerNameAction,
  CustomerNameActionTypes,
  CustomerNameState,
} from "./type";

const initialState: CustomerNameState = {
  data: [],
  loading: false,
  error: null,
};

const customerNameReducer = (
  state = initialState,
  action: CustomerNameAction
): CustomerNameState => {
  switch (action.type) {
    case CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case CustomerNameActionTypes.FETCH_CUSTOMER_NAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerNameReducer;
