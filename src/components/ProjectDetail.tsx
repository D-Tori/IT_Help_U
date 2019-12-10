import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import ProjectState from './ProjectState';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  padding: 20px;


  div {
    display: flex;
  }
  
  .flex-row-sb {
    border-bottom: 1px solid #eee;
    align-items: center;
  }

  .flex-item-name {
    padding: 5px;
    border-right: 1px solid #eee;
    width: 20%;
    font-weight: 800;
  }
  
  .flex-item-content {
    padding: 10px;
  }

  .project-intro-container {
    display: inline-block;
    border-bottom: 1px solid #eee;
  }

  .project-intro {
    display: block;
    padding: 5px;
    font-weight: 800;
  }

  .project-intro-content {
    display: block;
    padding: 5px;
  }

  @media (max-width:768px) {
    .flex-row-sb {
      diplay: flex;
      flex-direction: column;
      width: 100%;
    }
    .flex-item-name {
      display: flex;
      width: 100%;
      padding: 5px;
      border: none;
    }
    .flex-item-content {
      display: flex;
      width: 100%;
      padding: 5px;
    }
  }

  .block {
    div {
      display: block;
      font-size: 16px;
    }
  }

  
`



function ProjectDetail () {
  return (
    <> 
      <Container>
        <div className="flex-row-sb">
          <div className="flex-item-name">프로젝트명</div>
          <div className="flex-item-content">세상에 모든 기억을 지우는 지우개</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-item-name">프로젝트 개설자</div>
          <div className="flex-item-content">
            <Profile />
          </div>
        </div>   
        <div className="flex-row-sb">
          <div className="flex-item-name">프로젝트 기간</div>
          <div className="flex-item-content">2019-12-01 ~ 2019-12-31</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-item-name">모집인원</div>
          <div className="flex-item-content">3/4 명</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-item-name">모임장소</div>
          <div className="flex-item-content">서울시 강남구 역삼역 근처</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-item-name">모임 시간</div>
          <div className="flex-item-content">17:00 ~ 18:00</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-item-name">상태</div>
          <div className="flex-item-content block"><ProjectState /></div>
        </div>
        <div className="project-intro-container">
          <div className="project-intro">프로젝트 소개</div>
          <div className="project-intro-content">내가 말이야 이땅에 태어나서 하루 하루를 이렇게 살아본적이없어 ㅇㅋ? 구질구질하게 하지말자</div>
        </div>
        
        
      </Container>
    </>
  )
}

export default ProjectDetail;