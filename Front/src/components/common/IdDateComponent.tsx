import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import firstImage from '../../images/1.jpg'


const Style = styled.div`

  display: flex;
  width: 100%;
  align-items: center;

  .comment-profile-img {
  display: flex;
  width: 50px;
  height: 50px;

  }

  .comment-user {
    display: flex;
    width: 30px;
    border: none;
  }

  .date {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #cccccc;
  }

  span {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
  }

  .id-date-container {
    display: flex;
    margin-left: 15px;
    flex-direction: column;
  }

  .id-container {
    display: flex;
  }



`;

type IdDateComponentType = {
  user?: string,
  imgBool: boolean
}


function IdDateComponent({ user, imgBool }: IdDateComponentType) {
  return (
    <Style>
      <Image className="comment-profile-img" src={firstImage} roundedCircle />
      <div className="id-date-container">
        <div className="id-container">
          <span>{user}</span>
          {/* <Image className={imgBool ? "comment-user" : "d-none"} src={user} thumbnail /> */}
        </div>
        <div className="date">2019-12-31 00:00:00</div>
      </div>
    </Style>

  )
}

export default IdDateComponent;
