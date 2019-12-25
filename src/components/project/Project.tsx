import React from 'react';
import ProjectList from './ProjectList';
import MenuTitle from '../common/MenuTitle';
import styled from 'styled-components';
import MentorField from '../mentor/MentorField';

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
      <PageContentStyle>
          <MenuTitle menuTitle="사용 기술" />
          <MentorField />
          <MenuTitle menuTitle="프로젝트" toggleBtnName="모집중" routingBtnName="프로젝트 개설" routing="project/write" />
        <ProjectList />
      </PageContentStyle>
    </>
  )
}

export default ProjectPage;
