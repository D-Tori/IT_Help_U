import React from 'react';
import './App.css';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
    </div>
  );
}

export default App;
