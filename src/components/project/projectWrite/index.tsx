import React from 'react';
import MenuTitle from '../../common/MenuTitle';
import ProjectForm from './ProjectForm';

function ProjectWrite() {
  return(
    <>
    <MenuTitle menuTitle="프로젝트 개설" backBtnName="목록보기"/>
    <ProjectForm />
    </>
  )
};


export default ProjectWrite;
