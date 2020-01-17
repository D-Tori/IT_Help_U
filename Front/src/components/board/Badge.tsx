import React from 'react';
import styled from 'styled-components';

type Color = ''

type BadgesProps = {
  name: string,
  color: string
}


const BadgeStyle = styled.button`
  display: inline;
  background-color: ${props => props.theme.colors.pointColor}
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  border: none;
  margin-right: 5px;
  &:hover {
    background-color: ${props => props.theme.colors.lightPointColor}
  }
`;

type categoryItemType = {
  tag: string;
}

function Badge({tag}: categoryItemType) {
  return (
    <BadgeStyle>{tag}</BadgeStyle>
  )
}


export default Badge;
