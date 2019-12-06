import React from 'react';
import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import ProjectItem from './components/ProjectItem';

// import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
<<<<<<< HEAD
import Signup from './components/signup/Signup';
import ProjectPage from './components/ProjectPage';
=======
import SignUp from './components/login/SignUp';
import ResetPw from './components/login/ResetPw';
>>>>>>> d687859ad605887e74d442bf60715ddd7b4b3296


const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
<<<<<<< HEAD
        <Route path="/signUp" component={Signup} />
        <Route path="/project" component={ProjectPage} />
=======
        <Route path="/signUp" component={SignUp} />
        <Route path="/resetPw" component={ResetPw} />
>>>>>>> d687859ad605887e74d442bf60715ddd7b4b3296
      </Switch>
  );
}

export default App;
