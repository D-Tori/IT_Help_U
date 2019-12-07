import React from 'react';
import Header from './Header';
import ImageSlider from './ImageSlider';


import styled from 'styled-components';

const PageViewStyle = styled.div`
  margin: 0 auto;
  width: 1200px;
`


function Home() {
  return (
    <>
      <Header />
      <ImageSlider />
      <PageViewStyle>
      </PageViewStyle>
    </>
  )
}

export default Home;