// redux/auth/action.ts
import { Dispatch } from 'redux';
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
} from '../../service/auth';
import { setToken, getToken } from '../../service/auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const token = await loginService(username, password);
      setToken(token);
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 error (invalid credentials)
        dispatch({ type: LOGIN_FAILURE, payload: 'Invalid email or password' });
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
      }
    }
  };

export const register =
  (username: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const token = await registerService(username, password);
      setToken(token);
      dispatch({ type: LOGIN_SUCCESS, payload: token });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };

export const logout = () => (dispatch: Dispatch) => {
  logoutService();
  dispatch({ type: LOGOUT });
};
