import React from 'react';
import styled from 'styled-components';

const Style = styled.div`

  display: flex;

  &:hover {
    .state-circle {
      background: #4a47d5  ;
    }
  }

  .state-circle {
    width: 70px;
    height: 30px;
    background-color: #5457ff;
    border-radius: 25px;
    text-align:center;
    line-height:30px;
  }
  span {
    color: #fff;
  }

`

function ProjectState () {
  return(
    <Style>
      <div className="state-circle"><span>모집중</span></div>
    </Style>
  )
}

export default ProjectState;