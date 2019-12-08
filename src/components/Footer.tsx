import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display flex;
  height: 150px;
  padding: 20px;
  background-color: #333  ;
  justify-content: center;

  footer {
    display: flex;
    width: 100%;
    flex-direction: column;
  }


  footer ul {
    display: flex;
    list-style: none;
    padding-left: 0px;
  }

  footer ul li:first-child {
    margin-left: 0px;
  }

  footer ul li {
    margin: 0px 15px;
  }

  .logo {
    display: flex;
    color: #fff ;
  }

  footer ul li {
    margin: 0px 15px;
  }

  footer ul li .footer-link {
    text-decoration: none;
    color: #6d6d72 ;
    cursor: pointer;
    font-size: 13px;
  }

  footer ul li .footer-link:hover {
    color: #fff;
  }
  

  .footer-info {
    display: flex;
    color: #6d6d72;
  }


  @media (min-width: 1024px) {
    width: 100%;
    .footer-top {
      display: flex
      flex-direction: row;
      justify-content: space-between;
      line-height: 35px;
    }
  }
  @media (max-width: 1023px) {
    width: 100%;
    .footer-top {
      display: flex;
      flex-direction: column;
    }
    
    .logo {
      margin-bottom: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .footer-info {
      font-size: 11px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    footer ul {
      display: none;
    }
    .footer-top {
      margin-bottom: 20px;
    }
  }

  

`

function Footer() {
  return (
    <FooterContainer>
      <footer>
        <div className="footer-top">
          <div className="logo">
            ITHelpU
          </div>
          <ul>
            <li><a className="footer-link">서비스소개</a></li>
            <li><a className="footer-link">회원약관</a></li>
            <li><a className="footer-link">개인정보처리방침</a></li>
            <li><a className="footer-link">광고문의</a></li>
            <li><a className="footer-link">고객센터</a></li>
            <li><a className="footer-link">페이스북</a></li>
            <li><a className="footer-link">블로그</a></li>
          </ul>
        </div>

        <div className="footer-info">
          대표번호: 02-2653-1022 (09:00 ~ 18:00) / 점심시간: 13:00~14:00 (주말 및 공휴일 휴무)<br />
          ㈜레디앤스타트 | 사업자등록번호 : 117-81-82177 | 대표 : 조윤진 서울 종로구 종로1길 50, 더케이트윈타워 B동 2층
        </div>
      </footer>
    </FooterContainer>
  )
}

export default Footer;