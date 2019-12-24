import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


type ConditionType = {
  btnName: string,
  routing?: string
}

const ToggleBtnStyle = styled.button`
  display: flex;
  margin-left: 5px;

  .projects {
    background-color: #fff;
    font-weight: bold;
    color: #963484;
    border: 1px solid #963484;
    border-radius: 4px;
    &:focus, &:active {
      outline: none !important;
      box-shadow: none;
      background-color: #963484;
      color: #fff
    }
    @media (max-width: 767px) {
      width: 100%;
      margin-top 10px;
    }
  }
`;

function ToggleBtn ({ btnName, routing }: ConditionType) {

  let routingProp: string = '';

  if(routing !== undefined) {
    routingProp = routing;
  }


  return (
    <Link to={routingProp}><ToggleBtnStyle>{btnName}</ToggleBtnStyle></Link>
  )
}

export default ToggleBtn;
