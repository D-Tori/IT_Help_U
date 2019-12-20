import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import fifthImage from '../../images/5.jpg';
import mail from '../../images/mail.svg';
import phone from '../../images/phone.svg';

const Style = styled.div`
  display: flex;
  align-items: center;

  .img {
    display: flex;
    align
    width: 30px;
    height: 30px;
  }

  div {
    display: flex;
    margin-left: 10px;

  }



  .img-btn {
    width: 25px;
    margin-left: 5px;
  }

`;

function Profile () {
  return(
    <Style>
      <Image className="img" roundedCircle src={fifthImage} />
      <div>fepanbr</div>
      <input alt="이메일버튼" type="image" src={mail} className="img-btn" />
      <input alt="핸드폰버튼" type="image" src={phone} className="img-btn" />
    </Style>
  )
}

export default Profile;
