import './home.css';
import React, { useState, useEffect } from 'react';
import Cover from '../../../components/cover/cover.jsx';
import NavBar from '../../../components/navBar/navBar.jsx';
import Slider from '../../../components/slider/slider.jsx';
import Info from '../../../components/info/info.jsx';
import Footer from '../../../components/footer/footer.jsx';

function Home() {

  return (
    <div className="Home">
      <Cover/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default Home;