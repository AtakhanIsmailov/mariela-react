import React from 'react';
import Content1 from './components/Contents/Content1';
import Content2 from './components/Contents/Content2';
import Content3 from './components/Contents/Content3';
import Content4 from './components/Contents/Content4';
import Header from './components/Header/Header';
import Title from './components/main_img/Title';
import MorePhotos from './components/Contents/MorePhotos';
import MainFooter from './components/Footer/MainFooter';
import Footer from './components/Footer/Footer';




const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <MorePhotos />
      <MainFooter />
      <Footer />

    </div>
  );
};

export default App;