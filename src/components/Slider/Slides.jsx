import React from "react";
import "./Slider.css" 

const slidesInfo = [

    {
        src: require("../../public/media/1.jpg").default,
        alt: "altInfo 1",
        desc: "altInfo 1"

    },
    {
        src: require("../../public/media/2.jpg").default,
        alt: "altInfo 2",
        desc: "altInfo 2"

    },
    {
        src: require("../../public/media/3.jpg").default,
        alt: "altInfo 3",
        desc: "altInfo 3"

    },
    {
        src: require("../../public/media/4.jpg").default,
        alt: "altInfo 4",
        desc: "altInfo 4"

    },
    {
        src: require("../../public/media/5.jpg").default,
        alt: "altInfo 5",
        desc: "altInfo 5"

    }

] 

console.log(slidesInfo[0].src);

const slides = slidesInfo.map( slide => (
    <div className="slider-container">
        <img src={(slide.src)} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

//width={960} height={640}

export default slides;