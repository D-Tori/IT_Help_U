import React from 'react';
import Header from './Header';
import ImageSlider from './ImageSlider';


import styled from 'styled-components';
import Footer from './Footer';

const ContentViewStyle = styled.div`
  margin: 0 auto;
  width: 1200px;
  flex: 1;

`

const PageViewStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`


function Home() {
  return (
    <PageViewStyle>
      <Header />
      <ImageSlider />
      <ContentViewStyle>
      kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>
      kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>
      kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>
      kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>kaldfalkdfklanfkl<br/>
      </ContentViewStyle>
      <Footer />
    </PageViewStyle>
  )
}

export default Home;