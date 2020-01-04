import React from 'react';
import SignUp from './SignUp';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

function SignUpRoute() {
  let { path } = useRouteMatch();
  return(
    <Switch>
      <Route exact path={`${path}`}>
        <SignUp />
      </Route>
    </Switch>
  );
}

export default SignUpRoute;
