import React from 'react';
import styled from 'styled-components';
import logo from '../../images/footer_logo_1.png';

const FooterStyle = styled.footer`
  width: 100%;
  min-height: 150px;
  background-color: #333;
  color: #6d6d72;


  p {
    margin: 0;
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .footer-intro {
    display: flex;
    flex-direction: row-reverse;
  }


  .footer-intro > ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .footer-intro > ul li {
    margin: 0 10px;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

`;

const Image = styled.img`
  width: 200px;
  height: auto;
`;

const WidthStyle = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;


function Footer() {
  return (
      <FooterStyle>
        <WidthStyle>
        <Image src={logo} alt="로고1"/>
        <div className="footer-inner">
          <div className="footer-intro">
            <ul>
              <li>서비스 소개</li>
              <span>·</span>
              <li>이용약관</li>
              <span>·</span>
              <li>개인정보 처리방침</li>
              <span>·</span>
              <li>고객센터</li>
            </ul>
          </div>
          <div className="footer-info">
              <p>대표번호: 02-2653-1022 (09:00 ~ 18:00) / 점심시간: 13:00~14:00 (주말 및 공휴일 휴무)</p>
              <p>㈜레디앤스타트 | 사업자등록번호 : 117-81-82177 | 대표 : 조윤진 서울 종로구 종로1길 50, 더케이트윈타워 B동 2층</p>
          </div>
        </div>
        </WidthStyle>
      </FooterStyle>
  )
}

export default Footer;
