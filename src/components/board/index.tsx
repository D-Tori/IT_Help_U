import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import BoardDetailPage from './boardDetail/index';
import Board from './Board';

function Boards() {
  let { path } = useRouteMatch();
  return (
      <Switch>
        <Route exact path={`${path}`}>
          <Board />
        </Route>
        <Route path={`${path}/:id`}>
          <BoardDetailPage />
        </Route>
      </Switch>
  );
}

export default Boards;
