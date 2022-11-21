import React from 'react'
import "./cover.css"
import testVideo from "../../public/media/videoTest.webm"
import aboutPhoto from "../../public/media/FotoAbout.jpg"

const Cover = () => {
  return (
    <div className="cover-container">
        {/* <video className="video" src={testVideo} autoPlay loop muted/> */}
        <img src={aboutPhoto} alt="aboutImg"></img>
        <h1>Evelyn Denise</h1>
        <p>Fotografía</p>
    </div>
  )
}

export default Cover