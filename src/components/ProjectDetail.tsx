import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;

  div {
    display: flex;
  }
  
  .flex-row-sb {
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }

  .project-intro-container {
    display: inline-block;
    border-bottom: 1px solid #eee;
  }

  .project-intro {
    display: block;
  }

  .project-intro-content {
    display: block;
  }

  
`



function ProjectDetail () {
  return (
    <> 
      <Container>
        <div className="flex-row-sb">
          <div className="flex-items">프로젝트 명</div>
          <div className="flex-items">세상에 모든 기억을 지우는 지우개</div>
        </div>   
        <div className="flex-row-sb">
          <div className="flex-items">프로젝트 기간</div>
          <div className="flex-items">2019-12-01 ~ 2019-12-31</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-items">모집인원</div>
          <div className="flex-items">3/4 명</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-items">모임장소</div>
          <div className="flex-items">서울시 강남구 역삼역 근처</div>
        </div>
        <div className="flex-row-sb">
          <div className="flex-items">모임 시간</div>
          <div className="flex-items">17:00 ~ 18:00</div>
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