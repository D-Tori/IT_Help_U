import React from 'react';
import Home from './components/Home'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login/';
import ProjectPage from './components/project/projectList/';
import SignUp from './components/signUp/';
import ResetPw from './components/myPage/passWord/ResetPwPage';
import Mentors from './components/mentor/';
import MentorDetail from './components/mentor/detail/';
import MenteeProfile from './components/myPage/menteeProfile/';
import Question from './components/mentor/question/';
import Questioner from './components/questioner/';
import BoardWritePage from './components/board/boardWrite/';
import Boards from './components/board/index';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MentorApplication from './components/mentor/application/';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />

        <Route path="/signUp" component={SignUp} />
        <Route path="/myPage/resetPw" component={ResetPw} />
        <Route exact path="/mentors" component={Mentors} />
        <Route path="/mentors/detail" component={MentorDetail} />

        {/* board */}
        <Route path="/boards">
          <Boards />
        </Route>
        <Route path="/board/write">
          <BoardWritePage />
        </Route>
        {/* -------- */}

        {/* project */}
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
        <Route exact path="/project/write">
        </Route>
        {/* -------- */}

        <Route path="/myPage/menteeProfile" component={MenteeProfile} />
        <Route path="/mentors/question" component={Question} />
        <Route path="/questioner" component={Questioner} />
        <Route path="/mentors/application" component={MentorApplication} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
