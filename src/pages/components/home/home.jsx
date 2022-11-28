import './home.css';
import React, { useState, useEffect } from 'react';
import Cover from '../../../components/cover/cover.jsx';
import NavBar from '../../../components/navBar/navBar.jsx';
import Slider from '../../../components/slider/slider.jsx';
import MyWork from '../../../components/mywork/myWork.jsx';
import Info from '../../../components/info/info.jsx';


function Home() {

  return (
    <div className="Home">
      <Cover/>
      <MyWork/>
      <Slider/>
      <Info/>
    </div>
  );
}

export default Home;