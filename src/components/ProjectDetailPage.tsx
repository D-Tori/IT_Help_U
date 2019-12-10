import React from 'react';
import Header from './Header';
import ProjectDetail from './ProjectDetail';
import MenuTitle from './MenuTitle';
import styled from 'styled-components';
import SubmitBtn from './SubmitBtn';


const PageViewContainer = styled.div`

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 1200px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;


function ProjectDetailPage () {
  return(
    <>
      <Header />
      <PageViewContainer>
        <MenuTitle />
        <ProjectDetail />
          <SubmitBtn />
        
      </PageViewContainer>
    </>
  )
}

export default ProjectDetailPage;