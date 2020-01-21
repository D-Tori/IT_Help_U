import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Mentor from './Mentor';
import MentorDetailPage from './detail'

function Mentors() {
  let { path } = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${path}`}>
          <Mentor />
        </Route>
        <Route path={`${path}/:id`}>
          <MentorDetailPage />
        </Route>
      </Switch>
  );
}

export default Mentors;
