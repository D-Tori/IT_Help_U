import React from 'react';
import ProjectList from './ProjectList';
import Header from './Header';
import MenuTitle from './MenuTitle';
import styled from 'styled-components';
import MentorField from './login/MentorField';



const PageContentStyle = styled.div`

  
  margin: 0 auto;
  padding: 20px;
  
  flex-direction: column;
  align-content: flex-start;

  @media (min-width: 1025px) {
    width: 1200px;
  }

  @media all and (min-width: 480px) and (max-width: 768px) { 

  }
`



function ProjectPage() {
  return (
    <>
      <Header />
      <PageContentStyle>
        <MenuTitle />
          <MentorField />
        <MenuTitle />
        <ProjectList />
      </PageContentStyle>
    </>
  )
}

export default ProjectPage;