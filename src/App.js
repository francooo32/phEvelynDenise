import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar/navBar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/components/home/home.jsx'
import About from './pages/components/about/about.jsx'
import Contact from './pages/components/contact/contact.jsx'
import Portfolio from './pages/components/portfolio/portfolio.jsx'

function App() {

  const [scrollHeight, setScrolHeight] = useState(0) 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrolHeight(position); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  console.log(window.location);
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
      case "/about":
        Component = About
        break
        case "/contact":
          Component = Contact
          break
            case "/portfolio":
            Component = Portfolio
            break
  }

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight}/>
      <Component/>
      <Footer/>
    </div>
  );
}

export default App;
