import React from 'react';
import Login from './Login';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

function LoginRoute() {
  let { path } = useRouteMatch();
  return(
    <Switch>
      <Route exact path={`${path}`}>
        <Login />
      </Route>
    </Switch>
  );
}

export default LoginRoute;
