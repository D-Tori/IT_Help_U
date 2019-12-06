import React from 'react';
import Card from 'react-bootstrap/Card';
import fifthImage from '../images/5.jpg';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Profile from './Profile';
import ProjectState from './ProjectState';

const CardItemStyle = styled.div`

  margin-bottom: 10px;

  @media (min-width: 1025px) {
      width: 33.333333%;
  }
  @media (min-width: 768px) {
    width: 49%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  .info-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }  
  .block {
    display: flex;
    
  }

  .card-body {
    padding: 20px 20px 10px 20px;
  }

  .project-info {
    display: flex;
    justify-content: space-between;
  }


  .card-footer {
    display: flex;
    justify-content: space-between;
  }
  .submit-btn {
    display: flex;
    &:hover {
      color: #5457ff;
      cursor: pointer
    }
  }
  small {
    display: flex;
  }
`;


function ProjectItem() {
  return (
    <CardItemStyle>
      <Card>
        <Card.Body>
          <Card.Title>프로젝트 제목</Card.Title>
          <Card.Text>
            프로젝트 소개
          </Card.Text>
          <div className="info-container">
            <div className="block">장소</div>
            <div className="block">서울시 금천구</div>
          </div>
          <div className="info-container">
            <div className="block">기간</div>
            <div className="block">2019-12-05 ~ 2019-12-31</div>
          </div>
          <div className="info-container">
            <div className="block">모집인원</div>
            <div className="block">3명</div>
          </div>
          <div className="project-info">
            <Profile />
            <ProjectState />
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <div className="submit-btn">지원하기</div>
        </Card.Footer>
      </Card>
    </CardItemStyle>
  )

}

export default ProjectItem;