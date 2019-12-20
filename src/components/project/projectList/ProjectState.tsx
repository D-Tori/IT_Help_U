import React from 'react';
import styled from 'styled-components';

const Style = styled.div`

  display: block ;
  width: 80px;
  background-color: #5457ff;
  border-radius: 25px;
  text-align:center;
  color: #fff;
  line-height:30px;


  &:hover {
      background: #4a47d5  ;
      cursor: default;
  }


`

function ProjectState () {
  return(
      <Style>모집중</Style>
  )
}

export default ProjectState;