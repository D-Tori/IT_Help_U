import React from 'react';
import styled from 'styled-components';

type Color = ''

type BadgesProps = {
  name: string,
  color: string
}


const BadgeStyle = styled.button`
  display: inline-block;
  background-color: ${props => props.color}
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  width: 60px;
  height: 30px;
  border: none;
`;

function Badge({name, color}: BadgesProps) {
  return (
    <BadgeStyle color={color}>
      {name}
    </BadgeStyle>
  )
}

Badge.defaultProps = {
  name: 'React',
  color: 'red'
}

export default Badge;