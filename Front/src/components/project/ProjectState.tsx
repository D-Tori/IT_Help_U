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
`;

type StateType = {
  state: string
}

function ProjectState ({state}: StateType) {
  return(
      <Style>{state}</Style>
  )
}

export default ProjectState;
