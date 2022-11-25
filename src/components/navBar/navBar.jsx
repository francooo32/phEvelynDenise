import React from 'react'
import "./navBar.css"

const NavBar = ({isScrolling}) => {

  const returnToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={(returnToTop)}>
          
          <a className="navbar-logo" href="/"  onClick={(returnToTop)}>
            <p>Logo</p> 
            </a>
            
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
            </ul>

        </div>
        
    </nav>
  );
}

export default NavBar