import React from 'react'
import "./Cover.css"
import testVideo from "../../media/videoTest.webm"

const Cover = () => {
  return (
    <div className="cover-container">
        <video className="video" src={testVideo} autoPlay loop muted/>
        <h1>PH Evelyn Denise</h1>
        <p>Photographer | Designer</p>
    </div>
  )
}

export default Cover