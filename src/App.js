import './App.css';
import React, { useState, useEffect } from 'react';
import Cover from './components/Cover/Cover.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Slider from './components/Slider/Slider.jsx';

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
      <About/>
      <Slider/>
      
    </div>
  );
}

export default App;
