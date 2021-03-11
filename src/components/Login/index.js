import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import LoginCreate from '../LoginCreate';
import LoginForm from '../LoginForm';
import PasswordLost from '../PasswordLost';
import PasswordReset from '../PasswordReset';

const Login = () => {
  const { path } = useRouteMatch();
  return (
    <div>
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
  );
};

export default Login;
