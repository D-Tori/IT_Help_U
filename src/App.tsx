import React from 'react';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import ProjectItem from './components/ProjectItem';

// import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';



const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <ProjectItem />
    </div>
  );
}

export default App;
