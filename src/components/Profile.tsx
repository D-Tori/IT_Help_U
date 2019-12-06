import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import fifthImage from '../images/5.jpg';

const Style = styled.div`
  display: flex;

  .img {
    width: 30px;
    height: 30px;
  }

  div {
    display: flex;
    margin-left: 10px;
    align-items: center
  }

`;

function Profile () {
  return(
    <Style>
      <Image className="img" roundedCircle src={fifthImage} />
      <div>fepanbr</div>
    </Style>
  )
}

export default Profile;