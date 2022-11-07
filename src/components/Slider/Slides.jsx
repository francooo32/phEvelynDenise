import React from "react";
import "./Slider.css" 
import aboutPhoto from "../../media/FotoAbout.jpg"

const slidesInfo = [

    {
        src: "/static/media/1.421a15d11cce5be41bee.jpg",
        alt: "altInfo 1",
        desc: "altInfo 1"

    },
    {
        src: "/static/media/2.fa3fddd2a6537d3a31e6.jpg",
        alt: "altInfo 2",
        desc: "altInfo 2"

    },
    {
        src: "/static/media/3.d53b23c365ca391353e5.jpg",
        alt: "altInfo 3",
        desc: "altInfo 3"

    },
    {
        src: "/static/media/4.1e8b36adc60837539ac7.jpg",
        alt: "altInfo 4",
        desc: "altInfo 4"

    },
    {
        src: "/static/media/5.56a914dc86c39304973e.jpg",
        alt: "altInfo 5",
        desc: "altInfo 5"

    }

] 

const slides = slidesInfo.map( slide => (
    <div className="slider-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

//width={960} height={640}

export default slides;