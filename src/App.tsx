import React from 'react';
import Home from './components/Home'


// import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import ProjectPage from './components/ProjectPage';
import SignUp from './components/login/SignUp';
import ResetPw from './components/login/ResetPw';
import Mentors from './components/login/Mentors';


const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/resetPw" component={ResetPw} />
        <Route pate="/mentors" component={Mentors} />>
      </Switch>
  );
}

export default App;
