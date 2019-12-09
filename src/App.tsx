import React from 'react';
import Home from './components/Home'


// import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/LoginPage';
import ProjectPage from './components/ProjectPage';
import SignUp from './components/login/SignUpPage';
import ResetPw from './components/login/ResetPwPage';
import Mentors from './components/login/MentorsPage';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/resetPw" component={ResetPw} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/board" component={ProjectDetail} />
      </Switch>
  );
}

export default App;
