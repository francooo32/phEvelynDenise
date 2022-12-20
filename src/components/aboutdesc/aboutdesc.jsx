import React from 'react'
import "./aboutdesc.css"
import aboutPhoto from "../../public/media/fotoSobreMi.jpg"

const AboutDesc = () => {


  return (
    <div className="about-container">
        <div className="about-desc">
            <div className="about-title">
                <h1>EVELYN DENISE</h1>
            </div>
            <div className="about-profesion">
                <h3>---  FOTOGRAFA Y RETOCADORA</h3>
            </div>
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

export default AboutDesc