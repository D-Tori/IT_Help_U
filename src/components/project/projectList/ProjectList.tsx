import React from 'react';
import ProjectItem from './ProjectItem';

import styled from 'styled-components';



// const Style = styled.div`

//   align-content: center;
//   .card-deck {
//     display: flex;
//   }
// `

const PageViewStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start
    flex-wrap: wrap;
    flex-direction: row;
`


function ProjectList() {
  return (
    <PageViewStyle>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </PageViewStyle>
  )
}

export default ProjectList;
