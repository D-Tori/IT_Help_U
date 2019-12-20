import React from 'react';
import ProjectList from './ProjectList';
import Header from '../../common/Header';
import MenuTitle from '../../common/MenuTitle';
import styled from 'styled-components';
import MentorField from '../../mentor/MentorField';

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
        <MenuTitle condition='projectSkills'/>
          <MentorField />
        <MenuTitle condition='projects'/>
        <ProjectList />
      </PageContentStyle>
    </>
  )
}

export default ProjectPage;
