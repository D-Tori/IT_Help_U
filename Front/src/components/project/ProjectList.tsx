import React from 'react';
import ProjectItem from './ProjectItem';

import styled from 'styled-components';
import useProjects from '../../hooks/useProjects';



const PageViewStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start
    flex-wrap: wrap;
    flex-direction: row;
`


function ProjectList() {

  const projects = useProjects();

  return (
    <PageViewStyle>
      {projects.map((project) => (
          <ProjectItem project={project}/>
      ))}
    </PageViewStyle>
  )
}

export default ProjectList;
