import React from 'react'
import "./About.css"
import aboutPhoto from "../../public/media/FotoAbout.jpg"

const About = () => {


  return (
    <div className="about-container">
        <div className="about-desc">

          <h3>About me</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Magni ducimus neque magnam quibusdam minima voluptas expedita officiis, 
            beatae natus hic corporis qui nam iste similique veritatis tempora molestias. 
            Culpa, enim. 
          </p>
        </div>
        <div className="about-img">
            <img src={aboutPhoto} alt="aboutImg"></img>
          </div>
    </div>
  )
}

export default About