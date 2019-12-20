import React from 'react';
import Header from './common/Header';
import ImageSlider from './common/ImageSlider';


import styled from 'styled-components';
import Footer from './common/Footer';

const PageViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-content: center;


`

const ContentViewStyle = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  flex: 1;

  @media (min-width: 1024px) {
    width: 1200px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }

`


function Home() {
  return (
    <div>
      <PageViewStyle>
        <Header />
        <ImageSlider />
        <ContentViewStyle>
        </ContentViewStyle>
        <Footer />
      </PageViewStyle>
    </div>
  )
}

export default Home;
