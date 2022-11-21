import './App.css';
import React, { useState, useEffect } from 'react';
import Cover from './components/cover/cover.jsx';
import NavBar from './components/navBar/navBar.jsx';
import About from './components/about/about.jsx';
import Slider from './components/slider/slider.jsx';
import Info from './components/info/info.jsx';
import Footer from './components/footer/footer.jsx';

function App() {

  const [scrollHeight, setScrolHeight] = useState(0) 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight}/>
      <Cover/>
      {/* <About/> */}
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
