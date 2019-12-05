import React from 'react';
import Card from 'react-bootstrap/Card';
import fifthImage from '../images/5.jpg';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Profile from './Profile';
import ProjectState from './ProjectState';

const CardItemStyle = styled.div`
  .card {
    margin-top : 20px;
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

`;


function ProjectItem() {
  return (
    <CardItemStyle>
      <Card style={{ width: '30rem' }}>
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
            <div className="block">프로젝트 기간</div>
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
        </Card.Footer>
      </Card>
    </CardItemStyle>
  )

}

export default ProjectItem;