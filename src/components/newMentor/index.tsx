import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import NewMentor from './NewMentor';

function NewMentorRoute() {
  let { path } = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${path}`}>
          <NewMentor />
        </Route>
      </Switch>
  );
}

export default NewMentorRoute;
