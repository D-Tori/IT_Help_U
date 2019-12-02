import React from 'react';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import ProjectItem from './components/ProjectItem';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <ProjectItem />
    </div>
  );
}

export default App;
