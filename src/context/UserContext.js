import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { tokenPost, userGet } from '../services/api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem('token');
    history.push('/login');
  }, [history]);

  async function getUser(token) {
    const { url, options } = userGet(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = tokenPost({ email, password });

      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) throw new Error(`Error: ${json.message}`);

      const { token } = json;

      localStorage.setItem('token', token);
      await getUser(token);

      history.push('/conta');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const response = await getUser(token);
          if (!response.ok) throw new Error('Token inválido');
        } catch (err) {
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
