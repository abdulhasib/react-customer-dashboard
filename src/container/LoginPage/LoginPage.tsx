// container/LoginPage/LoginPage.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/action';
import { RootState } from '../../redux/store';

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Validation
    if (!username) {
      setErrorUsername('Username is required');
      return;
    }
    if (!password) {
      setErrorPassword('Password is required');
      return;
    }

    // Clear error messages
    setErrorUsername('');
    setErrorPassword('');

    dispatch(login(username, password))
      .then(() => navigate('/'))
      .catch((error) => console.error('Login error:', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {isSubmitted && !username && <p>{errorUsername}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSubmitted && !password && <p>{errorPassword}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
