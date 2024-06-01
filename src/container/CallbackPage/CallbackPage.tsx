import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../redux/auth/action';
import { setToken } from '../../service/auth';

const CallbackPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        try {
          const response = await axios.post(
            'http://localhost:3000/auth/oauth/callback',
            { code }
          );
          const { token } = response.data;

          // Save token
          setToken(token);

          // Dispatch login success action
          dispatch({ type: LOGIN_SUCCESS, payload: token });

          // Redirect to the home page or any other page
          navigate('/');
        } catch (error) {
          dispatch({ type: LOGIN_FAILURE, payload: error.message });
          navigate('/login'); // Redirect to login page in case of error
        }
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Authorization code not found',
        });
        navigate('/login'); // Redirect to login page in case of error
      }
    };

    handleOAuthCallback();
  }, [dispatch, history]);

  return (
    <div>
      <h2>Authenticating...</h2>
      <p>Please wait while we authenticate your account.</p>
    </div>
  );
};

export default CallbackPage;
