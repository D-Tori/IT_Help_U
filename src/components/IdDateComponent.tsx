import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import firstImage from '../images/1.jpg'
import user from '../images/user.svg';

const Style = styled.div`

  display: flex;
  width: 100%;
  

  .comment-profile-img {
  display: flex;
  width: 60px;
  height: 60px;
  
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
  imgBool: boolean
}


function IdDateComponent({imgBool}: IdDateComponentType) {
  return (
    <Style>
      <Image className="comment-profile-img" src={firstImage} roundedCircle />
      <div className="id-date-container">
        <div className="id-container">
          <span>hongis0327</span>
          <Image className={imgBool ? "comment-user" : "d-none"} src={user} thumbnail />    {/* 글쓴이인지 아닌지에 따라 디스플레이 none or block */}
        </div>
        <div className="date">2019-12-31 00:00:00</div>
      </div>
    </Style>

  )
}

export default IdDateComponent;