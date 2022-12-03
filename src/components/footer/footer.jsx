import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-info">
            <h1>Your name</h1>
            <p>Cosas genericas para escribir</p>
        </div>
        <div className="footer-contact">
            <h3>Your name</h3>
            <p>Cosas genericas para escribir</p>
        </div>
        <div className="footer-sns">
            <div className="sesign-by">
                Diseñado por FrancoDev
            </div>
            <div className="sns-links">
                <a href="https://www.instagram.com/ph.evelyndenise/?hl=es" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram instagram"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer"> 
                    <i className="fab fa-facebook facebook"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
            </div>

        </div>

    </footer>
  )
}

export default Footer