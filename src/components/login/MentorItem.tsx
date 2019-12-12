import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import MentorImg from './images/mentor1.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MentorItem(){
  return(
    <CardMentor>
      <div className="container">
          <div className="top">
            <div className="mentorImg">
              <Link to='/mentorDetail'>
                <Image className="img" src={MentorImg} roundedCircle />
              </Link>  
            </div>
            <div className="primaryInfo">
              <div className="pTitle">IT 개발</div>
              <div className="pInfo">Java React Python HTML/CSS</div>
            </div>
          </div>
          <div className="bottom">
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
            <div className="btnBlock">
              <Link to='menteeProfile'>
                <Button size="sm">질문하기</Button>
              </Link>
            </div>
          </div>
      </div>
    </CardMentor>
  );
}

export default MentorItem;

const CardMentor= styled.div`
  margin-bottom: 10px;

  @media (max-width:507px){
    width: 100%
  }

  @media (min-width: 508px){
    width: 49%
  }
  
  @media (min-width: 768px){
    width: 33%;
  }

  @media (min-width: 1025px){
    width: 24%;
  }
  
  .container{
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 15px;
    background: #fff;
    font-size: 14px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .top, .bottom{
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }

  .mentorImg{
    display: flex;
  }

  .img {
    width: 80px;
    height: 80px;
    display: flex;
  }

  .primaryInfo {
    width: 40%;
    text-align: right
    word-break: break-all;

    display: flex;
    flex-direction: column;
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

  .mentorInfo{
    display: flex;
    flex-direction: column;
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

  .btnBlock{
    position: relative;
    top: 27px;
  }

  .btn{
    background-color: #4a47d5;
  }
`