import React from 'react';
import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import ProjectItem from './components/ProjectItem';

// import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/SignUp';



const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={Signup} />
      </Switch>
  );
}

export default App;
