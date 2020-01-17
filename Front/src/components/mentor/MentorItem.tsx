import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import MentorImg from '../../images/mentor1.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Mentor } from '../../modules/mentors';

type MentorItemProps = {
  mentor: Mentor;
};

function MentorItem({ mentor }: MentorItemProps){
  return(
    <CardMentor>
      <div className="container">
          <div className="top">
            <div className="mentor-img">
              <Link to='/mentors/detail'>
                <Image className="img" src={MentorImg} roundedCircle />
              </Link>
            </div>
            <div className="primary-info-container">
              <div className="primary-title"> IT 개발 </div>
              <div className="primary-detail-info"> {mentor.field} </div>
            </div>
          </div>
          <div className="bottom">
            <div className="mentor-info-container">
              <div className="name">
                <span className="mentor-name"> {mentor.name} </span>
                <span className="position"> {mentor.role} </span>
              </div>
              <div className="job">
                <div className="company"> {mentor.company} </div>
                <div className="department"> {mentor.department} </div>
              </div>
            </div>
            <div className="btn-container">
              <Link to='/myPage/menteeProfile'>
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

  .mentor-img{
    display: flex;
  }

  .img {
    width: 80px;
    height: 80px;
    display: flex;
  }

  .primary-info-container {
    width: 40%;
    text-align: right
    word-break: break-all;

    display: flex;
    flex-direction: column;
  }

  .primary-title{
    font-size: 11px;
    line-height: 1.6;
    color: #6d6d72;
  }

  .primary-detail-info{
    font-size: 11px;
    font-weight: bold;
    line-height: 1.3;
  }

  .mentor-info-container{
    display: flex;
    flex-direction: column;
  }

  .mentor-name{
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

  .btn-container{
    position: relative;
    top: 27px;
  }

  .btn{
    background-color: #4a47d5;
  }
`
