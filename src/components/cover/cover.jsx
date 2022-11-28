import React from 'react'
import "./cover.css"
import aboutPhoto from "../../public/media/fotoAbout.jpg"
import Button from '../../components/button/button.jsx';
import { BUTTON_TYPES } from '../../common/data/buttonConst';

const Cover = () => {
  return (
    <div className="cover-container">
        {/* <video className="video" src={testVideo} autoPlay loop muted/> */}
        <img src={aboutPhoto} alt="aboutImg"></img>
        <h1>Evelyn Denise</h1>
        <p>Fotografía</p>
        <div className="button-wrapper">
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Contactame"/>
          <Button type={BUTTON_TYPES.SECONDARY} btnText="Mi trabajo"/>
        </div>
    </div>
  )
}

export default Cover