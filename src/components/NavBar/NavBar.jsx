import React from 'react'
import "./NavBar.css"

const NavBar = ({isScrolling}) => {

  const returnToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={(returnToTop)}>Logo</div>
    </nav>
  )
}

export default NavBar