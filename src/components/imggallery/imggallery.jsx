import React, { useState, useEffect } from 'react';
import "./imggallery.css"
import imgsRetratos from "./imagesforgallery/imagesRetrato.jsx"
import imgsGastronomia from "./imagesforgallery/imagesGastronomia.jsx"
import imgsFotoproducto from "./imagesforgallery/imagesFotoproducto.jsx"

const ImgGallery = () => {

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>
    <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc}/>
        <button class="btn-close" onClick={() => setModel(false)}>&times;</button>
    </div>
    <h2>RETRATOS</h2>
    <div className="imgGallery">
          {imgsRetratos.map((item, index) => {
              return (
                  <div className="imgs" key={index} onClick={() => getImg(item.imgSrc)}>
                      <img src={item.imgSrc} style={{ width: '100%' }}></img>
                  </div>
              );
          })}
      </div>

    <h2>GASTRONOMIA</h2>
    <div className="imgGallery">
          {imgsGastronomia.map((item, index) => {
              return (
                  <div className="imgs" key={index} onClick={() => getImg(item.imgSrc)}>
                      <img src={item.imgSrc} style={{ width: '100%' }}></img>
                  </div>
              );
          })}
      </div>

    <h2>FOTOPRODUCTO</h2>
    <div className="imgGallery">
          {imgsFotoproducto.map((item, index) => {
              return (
                  <div className="imgs" key={index} onClick={() => getImg(item.imgSrc)}>
                      <img src={item.imgSrc} style={{ width: '100%' }}></img>
                  </div>
              );
          })}
      </div>
    </>
  )
}

export default ImgGallery