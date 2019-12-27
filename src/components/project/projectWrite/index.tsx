import React from 'react';
import MenuTitle from '../../common/MenuTitle';
import ProjectForm from './ProjectForm';
import styled from 'styled-components';

const PageViewContainer = styled.div`
  width: 800px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

function ProjectWrite() {
  return(
    <PageViewContainer>
    <MenuTitle menuTitle="프로젝트 개설" backBtnName="목록보기"/>
    <ProjectForm />
    </PageViewContainer>
  )
};


export default ProjectWrite;
