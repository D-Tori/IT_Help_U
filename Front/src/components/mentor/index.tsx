import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Mentor from './Mentor';

function Mentors() {
  let { path } = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${path}`}>
          <Mentor />
        </Route>

      </Switch>
  );
}

export default Mentors;
