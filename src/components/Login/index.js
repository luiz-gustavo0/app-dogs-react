import React, { useContext } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { UserContext } from '../../context/UserContext';
import LoginCreate from '../LoginCreate';
import LoginForm from '../LoginForm';
import PasswordLost from '../PasswordLost';
import PasswordReset from '../PasswordReset';

import './styles.css';

const Login = () => {
  const { login } = useContext(UserContext);
  const { path } = useRouteMatch();

  if (login === true) {
    <Redirect to='/conta' />;
  }
  return (
    <section className='section-login'>
      <div className='section-login-forms'>
        <Switch>
          <Route exact path={path}>
            <LoginForm />
          </Route>
          <Route path={`${path}/criar`}>
            <LoginCreate />
          </Route>
          <Route path={`${path}/perdeu`}>
            <PasswordLost />
          </Route>
          <Route path={`${path}/resetar`}>
            <PasswordReset />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Login;
