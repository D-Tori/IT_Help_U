import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


type BtnType = {
  btnName: string,
  routing?: string
}

const BackBtnStyle = styled.button`
  display: flex;
  font-size: ${props => props.theme.fontSize.medium};
  background-color: ${props => props.theme.colors.pointColor2};
  font-weight: ${props => props.theme.fontWeight.emphasis};
  color: ${props => props.theme.colors.whiteColor};
  border: none;
  border-radius: 4px;
    @media (max-width: 767px) {
      justify-content: center;
      width: ${props => props.theme.width.fullWidth};
    }
  }
`;

function RoutingBtn ({ btnName, routing }: BtnType) {
  const history = useHistory();
  let onClickHandler = () => {
    history.push(`${routing}`)
  }

  return (
    <BackBtnStyle onClick={onClickHandler}>{btnName}</BackBtnStyle>
  )
}

export default RoutingBtn;
