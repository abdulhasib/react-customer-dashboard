// redux/customerNameChangeLog/reducer.ts
import {
  CustomerNameChangeLogByCustomerNameAction,
  CustomerNameChangeLogByCustomerNameActionTypes,
  CustomerNameChangeLogState,
} from "./type";

const initialState: CustomerNameChangeLogState = {
  data: [],
  dataByCustomerName: [],
  loading: false,
  error: null,
};

const nameChangeLogReducer = (
  state = initialState,
  action: CustomerNameChangeLogByCustomerNameAction
): CustomerNameChangeLogState => {
  switch (action.type) {
    case CustomerNameChangeLogByCustomerNameActionTypes.FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CustomerNameChangeLogByCustomerNameActionTypes.FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_SUCCESS:
      return {
        ...state,
        dataByCustomerName: action.payload,
        loading: false,
      };
    case CustomerNameChangeLogByCustomerNameActionTypes.FETCH_NAME_CHANGE_LOGS_BY_CUSTOMER_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default nameChangeLogReducer;
