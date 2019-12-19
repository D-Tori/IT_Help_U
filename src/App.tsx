import React from 'react';
import Home from './components/Home'


// import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/LoginPage';
import ProjectPage from './components/ProjectPage';
import SignUp from './components/login/SignUpPage';
import ResetPw from './components/login/ResetPwPage';
import Mentors from './components/login/MentorsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import MentorDetail from './components/login/MentorDetailPage';
import BoardPage from './components/BoardPage';
import MenteeProfile from './components/login/MenteeProfilePage';
import Question from './components/login/QuestionPage';
import QuestionList from './components/login/QuestionListPage';
import BoardDetailPage from './components/BoardDetailPage';
import BoardWritePage from './components/BoardWritePage';

const App: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/project" component={ProjectPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/resetPw" component={ResetPw} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/project/Detail" component={ProjectDetailPage} />
        <Route path="/mentorDetail" component={MentorDetail} />
        <Route exact path="/board" component={BoardPage} />
        <Route path="/menteeProfile" component={MenteeProfile} />
        <Route path="/question" component={Question} />
        <Route path="/questionList" component={QuestionList} />
        <Route path="/board/detail" component={BoardDetailPage} />
        <Route path="/board/write" component={BoardWritePage} />
      </Switch>
  );
}

export default App;
