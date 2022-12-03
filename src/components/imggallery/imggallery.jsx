import React from 'react'
import "./imggallery.css"

const ImgGallery = () => {

    let imgs = [

        {
            id: 1,
            imgSrc: require("../../public/media/1.jpg").default
        },
        {
            id: 2,
            imgSrc: require("../../public/media/2.jpg").default
        },
        {
            id: 3,
            imgSrc: require("../../public/media/3.jpg").default
        },
        {
            id: 4,
            imgSrc: require("../../public/media/4.jpg").default
        },
        {
            id: 5,
            imgSrc: require("../../public/media/5.jpg").default
        }

    ]

  return (
    <div className="imgGallery">
        {imgs.map( (item, index) =>{
            return (
                <div className="imgs" key={index}>
                    <img src={item.imgSrc} style={{width: '100%'}}></img>
                </div>
            )
        } )}
    </div>
  )
}

export default ImgGallery