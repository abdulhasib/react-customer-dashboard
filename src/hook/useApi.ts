// hooks/useApi.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../redux/actions/customerActions";
import { fetchNameChangeLogs } from "../redux/actions/nameChangeLogActions";

const useApi = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchNameChangeLogs());
  }, [dispatch]);
};

export default useApi;
