import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProjectDetailPage from './projectDetail/index';
import Project from './Project';

function Projects () {
  let { path } = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${path}`}>
          <Project />
        </Route>
        <Route path={`${path}/:id`}>
          <ProjectDetailPage />
        </Route>
      </Switch>
  )
}

export default Projects;
