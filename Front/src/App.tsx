import React from 'react';
import Home from './components/Home'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login/';
import Projects from './components/project/index';
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
import NewMentor from './components/newMentor';
import ProjectWrite from './components/project/projectWrite';
import styled from 'styled-components';

const GlobalStyle = styled.div`
    font-family: ${props => props.theme.font[0]};
    font-size: ${props => props.theme.fontSize.medium};
    h1, h2, h3, h4, h5, h6 {
      font-size: ${props => props.theme.fontSize.xLarge};
      margin: 0;
    }
    li {
      list-style: none;
    }
    width: ${props => props.theme.width.normalWidth};
    margin: 0 auto;
    min-height: 100vh;
    @media (max-width: 767px) {
      width: ${props => props.theme.width.fullWidth};
    }
`;


const App = () => {
  return (
      <Router>
        <Header />
        <GlobalStyle>
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
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/project/write">
            <ProjectWrite />
          </Route>
          {/* -------- */}

          <Route path="/myPage/menteeProfile" component={MenteeProfile} />
          <Route path="/mentors/question" component={Question} />
          <Route path="/questioner" component={Questioner} />
          <Route path="/newMentor" component={NewMentor} />

          </Switch>
        </GlobalStyle>
        <Footer />
      </Router>
  );
}

export default App;
