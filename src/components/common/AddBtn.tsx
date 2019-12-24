import React from 'react';
import styled from 'styled-components';

const BackBtnStyle = styled.button`
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

type BtnType = {
  btnName: string,
  onClickHandler?: () => void
}

function AddBtn ({ btnName, onClickHandler }: BtnType) {

  return (
    <BackBtnStyle onClick={onClickHandler}>{btnName}</BackBtnStyle>
  )
}

export default AddBtn;
