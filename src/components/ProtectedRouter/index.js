import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../context/UserContext';

const ProtectedRouter = (props) => {
  const { login } = useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Redirect to='/login' />;
  else return null;
};

export default ProtectedRouter;
