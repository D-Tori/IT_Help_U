import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import fristImage from '../images/1.jpg'
import secondImage from '../images/2.jpg'
import thridImage from '../images/3.jpg'
import fourthImage from '../images/4.jpg'
import fifthImage from '../images/5.jpg'
// import './ImageSlider.css';
import styled from 'styled-components';

const Style = styled.div`
  

  img {
    height: 334px;
  }
`

function ImageSlider() {
  return (
    <Style>
      <Carousel controls={false} fade={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fristImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>신입 개발자... ITHelpU와 함께하세요</h3>
            <p>신입 포트폴리오 제작할 팀원들을 모집하고, 멘토의 도움을 받아 코드리뷰, 컨펌을 받으세요!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondImage}
            alt="second slide"
          />

          <Carousel.Caption>
            <h3>멘토가 되어보세요!</h3>
            <p>자신의 경험과 커리어를 공유하고 가치를 나누세요</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thridImage}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>모이면 배가 된다!</h3>
            <p>큭큭큭</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fourthImage}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>모이면 배가 된다!</h3>
            <p>큭큭큭</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fifthImage}
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h3>모이면 배가 된다!</h3>
            <p>큭큭큭</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Style>
  )
}

export default ImageSlider;