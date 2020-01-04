import React from 'react';
import styled from 'styled-components';

type Color = ''

type BadgesProps = {
  name: string,
  color: string
}


const BadgeStyle = styled.button`
  display: inline;
  background-color: #5457ff
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  margin-right: 5px;
`;

type categoryItemType = {
  category: string;
}

function Badge({category}: categoryItemType) {
  return (
    <BadgeStyle>{category}</BadgeStyle>
  )
}

Badge.defaultProps = {
  name: 'React',
  color: 'red'
}

export default Badge;
