import React, { useState, useEffect } from 'react';
import "./imggallery.css"

const ImgGallery = () => {

    let imgs = [

        {
            id: 1,
            imgSrc: require("../../public/media/persons/NALU.jpg").default
        },
        {
            id: 2,
            imgSrc: require("../../public/media/persons/CLARA.jpg").default
        },
        {
            id: 3,
            imgSrc: require("../../public/media/persons/INES.jpg").default
        },
        {
            id: 4,
            imgSrc: require("../../public/media/persons/LULA.jpg").default
        },
        {
            id: 5,
            imgSrc: require("../../public/media/persons/EVE.jpg").default
        },
        {
            id: 6,
            imgSrc: require("../../public/media/persons/CANDE.jpg").default
        },
        {
            id: 7,
            imgSrc: require("../../public/media/persons/IGNACIO.jpg").default
        },
        {
            id: 8,
            imgSrc: require("../../public/media/persons/PRINCE.jpg").default
        }

    ]

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
    <div className="imgGallery">
          {imgs.map((item, index) => {
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