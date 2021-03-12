import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../services/api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  async function getUser(token) {
    const response = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setData(response.data);
    setLogin(true);
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const response = await api.post('/login', { email, password });

      console.log(response);

      if (response.status !== 200) {
        throw new Error(response);
      }

      const token = response.data.token;
      localStorage.setItem('token', token);

      await getUser(token);
      history.push('/conta');
    } catch (err) {
      console.log(err.response);
      setError(err.response.data.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem('token');
    history.push('/login');
  }, [history]);

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          await getUser(token);
        } catch (err) {
          setError(err.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, [history, userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
