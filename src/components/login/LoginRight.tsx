import React from 'react';
import styled from 'styled-components';
import icon from './images/icon-star.svg';
import img from './images/Login-Illustration-1.svg';


function LoginRight(){
  return(
    <Container>
        <Inner>
            <h3><img src= {icon} className="icon" alt="임시아이콘" />IT_Help_U</h3>
            <p> IT_Help_U 는 It 취준생을 위해 개발되었습니다 <br/> 이곳에서 함께 준비하세요! </p>
        </Inner>
    </Container>
  );
}

export default LoginRight;


const Container = styled.div`
  background: url(${img}) no-repeat left bottom #E9EEFA;
  background-size: cover;
  min-height: 550px;

  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`

const Inner = styled.div`
  text-align: right!important;
  padding: 50px;

  h3 {
    letter-spacing: 0rem;
    font-size: 18px;
    line-height: 26px; 
    margin-bottom: 15px;
    font-weight: 700;
    color: #171933;
  }

  img {
    margin-right: 10px;
    margin-top: -2px;
  }

  p {
    color: #758294;
    margin-top: 0;
    margin-bottom: 1rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`



