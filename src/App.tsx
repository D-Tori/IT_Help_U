import React from 'react';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import ProjectItem from './components/ProjectItem';

// import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/SignUp';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={Signup} />
      </Switch>
    </BrowserRouter>
      // <Header />
      // <ImageSlider />
      // <ProjectItem />
  );
}

export default App;
