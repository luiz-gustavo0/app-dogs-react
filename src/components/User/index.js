import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Feed from '../Feed';
import UserHeader from '../UserHeader';
import UserPhotoPost from '../UserPhotoPost';
import UserStats from '../UserStats';

const User = () => {
  const { path } = useRouteMatch();

  return (
    <section className='container'>
      <UserHeader />
      <Switch>
        <Route exact path={path}>
          <Feed />
        </Route>
        <Route path={`${path}/postar`}>
          <UserPhotoPost />
        </Route>
        <Route path={`${path}/estatisticas`}>
          <UserStats />
        </Route>
      </Switch>
    </section>
  );
};

export default User;
