import React from 'react';
import ProjectItem from './ProjectItem';
import CardDeck from 'react-bootstrap/CardDeck';
import styled from 'styled-components';

const Style = styled.div`
  .card-deck {
    margin: 0 auto;
  }
`

function ProjectList() {
  return (
    <Style>
      <CardDeck>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        
      </CardDeck>

    </Style>
  )
}

export default ProjectList;