import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import MentorImg from './images/mentor1.png';
import Button from 'react-bootstrap/Button';

function MentorCard(){
  return(
    <CardMentor>
      <div className="col-100 tablet-50 desktop-25">
        <div className="card">
          <a type="external" href="#">
            <div className="coverImage" />
            <div className="mentorImg">
              <Image className="img" src={MentorImg} roundedCircle />
            </div>
            <div className="mentorInfo">
              <div className="name">
                <span className="mentorName">박보영</span>
                <span className="position">멘토</span>
              </div>
              <div className="job">
                <div>nc소프트</div>
                <div>기획팀</div>
              </div>
            </div>
          </a>
          <div className="primaryInfo">
            <div className="pTitle">IT 개발</div>
            <div className="pInfo">Java 개발 React</div>
          </div>
          <Button size="sm" variant="danger">질문하기</Button>
        </div>
      </div>
    </CardMentor>
  );
}

export default MentorCard;

const CardMentor= styled.div`
  @media (min-width: 768px){
    width: 50%;
  }

  @media (max-width: 768px){
    width: 100%
  }

  @media (min-width: 1025px){
    width: 25%
  }
  
  .card{
    margin: 15px;
    margin-top: 0;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.09);
    position: relative;
    border-radius: 15px;
    background: #fff;
    font-size: 14px;
  }

  a {
    color: #ff2d55;
    cursor: pointer;
    text-decoration: none;
    outline: 0;
    background-color: transparent;
  }

  .coverImage {
    background-image: url();
    padding-top: 42.25%;
    background-position: center;
    background-size: cover;
  }
  
  .coverImage::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .mentorImg{
    position: absolute;
    left: 12px;
    top: 12px;
  }

  .img {
    width: 50px;
    height: 50px;
  }

  .mentorInfo{
    position: absolute;
    left: 12px;
    bottom: 12px;
  }

  .mentorName{
    color: black;
    font-size: 21px;
    font-weight: bold;
  }

  .position{
    color: rgba(0,0,0,0.84);
    font-size: 10px;
    font-weight: bold;
  }

  .job{
    color: rgba(0,0,0,0.84);
    font-size: 11px;
    font-weight: bold;
    line-height: 1.3;
  }

  .primaryInfo {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 35%;
    color: black;
    text-align: right;
    word-break: break-all;
  }

  .pTitle{
    font-size: 11px;
    line-height: 1.6;
    color: #6d6d72;
  }

  .pInfo{
    font-size: 11px;
    font-weight: bold;
    line-height: 1.3;
  }

  .btn{
    position: absolute;
    right: 12px;
    bottom: 12px;
  }
`