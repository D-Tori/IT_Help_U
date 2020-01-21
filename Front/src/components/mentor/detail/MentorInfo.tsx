import React from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import MentorImg from '../../../images/mentor1.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Mentor } from '../../../modules/user';


function MentorInfo() {
  return(
    <ContentBox>
      <div className="mentorImg">
        <Link to='/mentors/detail'>
          <Image className="img" src={MentorImg} roundedCircle />
        </Link>
      </div>
      <div className="infoBox">
        <div className="name">
          <span className="profileName">
            {/* {mentor.name} */}
            {/* <small>{mentor.role}</small> */}
          </span>
        </div>
        <div className="job">
          {/* {mentor.company} · {mentor.department} */}
        </div>
        <div className="detail">
          <div className="detailInfo">
            <div className="typeBlock">
              <div className="typelabel">
                <span className="label">답변율<strong className="highLight">100%</strong></span>
              </div>
            </div >
            <div className="typeBlock">
              <div className="typelabel">
                <span className="label">답변수<strong className="highLight">27건</strong></span>
              </div>
            </div>
            <div className="typeBlock">
              <div className="typelabel">
                <span className="label">팔로워<strong className="highLight">88명</strong></span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="title">직무 유형</div>
            <div className="detailInfo2">
              <div className="typeBlock">
                <div className="typelabel">IT 개발</div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="title">멘토링 분야</div>
            <div className="detailInfo2">
              <div className="typeBlock">
                <div className="typelabel">Java</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">React</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">Python</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">HTML/CSS</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">HTML/CSS</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">HTML/CSS</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">HTML/CSS</div>
              </div>
              <div className="typeBlock">
                <div className="typelabel">HTML/CSS</div>
              </div>
            </div>
          </div>

          <div className="btnContainer">
            <Button className="btnFollow">팔로우</Button>
            <Button className="btnQuestion" href="/mentors/question">질문하기</Button>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}


export default MentorInfo

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
  padding: 0 15px;

  @media(max-width: 799px){
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  .mentorImg{
    display:flex;
  }

  .img {
    width: 250px;
    height: 250px;
  }

  .infoBox{
    display: flex;
    flex-direction: column;
    max-width: 60%;

    @media(max-width: 799px){
      max-width: 100%;
      margin-top: 10px;
    }
  }

  .name, .typelabel, .label{
    display: flex;
  }

  .profileName{
    font-size: 28px;
    font-weight: bold;
    word-break: keep-all;
  }

  small{
    font-size: 50%;
    color: #6d6d72;
    font-weight: bold;
    word-break: keep-all;
  }

  .job{
    margin-top: 8px;
    font-size: 17px;
    color: #6d6d72;
  }

  .detailInfo{
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    font-size: 13px;
  }

  .detailInfo2{
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    font-size: 13px;
  }

  .typeBlock{
    height: 28px;
    padding: 0 8px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 12px;
    display:flex;
    align-items: center;
    margin: 2px 5px 0 0;
  }

  .highLight{
    color: #ff2d55 !important;
    margin-left: 2px;
  }

  .box{
    margin-top: 15px;
  }

  .btnContainer{
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
  }

  .btnFollow{
    color: #4a47d5;
    background-color: white;
    margin-right: 5px;

    @media(max-width: 620px){
      width: 100%;
      margin-top: 5px;
    }
  }

  .btnQuestion{
    background-color: #4a47d5;
    margin-right: 5px;

    @media(max-width: 620px){
      width: 100%;
      margin-top: 5px;
    }
  }
`
