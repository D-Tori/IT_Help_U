import React from 'react';
import Home from './components/Home'

import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/';
import ProjectPage from './components/project/projectList/';
import SignUp from './components/signUp/';
import ResetPw from './components/myPage/passWord/ResetPwPage';
import Mentors from './components/mentor/';
import ProjectDetailPage from './components/project/projectDetail/ProjectDetailPage';
import MentorDetail from './components/mentor/detail/';
import BoardPage from './components/board/boardList/';
import MenteeProfile from './components/myPage/menteeProfile/';
import Question from './components/mentor/question/';
import Questioner from './components/questioner/';
import BoardDetailPage from './components/board/boardDetail/';
import BoardWritePage from './components/board/boardWrite/';


const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/project" component={ProjectPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/myPage/resetPw" component={ResetPw} />
        <Route exact path="/mentors" component={Mentors} />
        <Route path="/project/Detail" component={ProjectDetailPage} />
        <Route path="/mentors/detail" component={MentorDetail} />
        <Route exact path="/board" component={BoardPage} />
        <Route path="/myPage/menteeProfile" component={MenteeProfile} />
        <Route path="/mentors/question" component={Question} />
        <Route path="/questioner" component={Questioner} />
        <Route path="/board/detail" component={BoardDetailPage} />
        <Route path="/board/write" component={BoardWritePage} />
      </Switch>
  );
}

export default App;
