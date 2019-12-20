import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

type ConditionType = {
  btnName: string
  condition: string
}

const ButtonStyle = styled.div`
  display: flex;

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

function MenuButton ({ btnName, condition }: ConditionType) {
  return (
    <ButtonStyle><Button className={condition}>{btnName}</Button></ButtonStyle>
  )
}

export default MenuButton;
