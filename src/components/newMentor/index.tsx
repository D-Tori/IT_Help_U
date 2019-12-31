import React from 'react';
import NewMentor from './NewMentor';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

function NewMentorRoute() {
  let { path } = useRouteMatch();
  return(
    <Switch>
      <Route exact path={`${path}`}>
        <NewMentor />
      </Route>
    </Switch>
  );
}

export default NewMentorRoute;
