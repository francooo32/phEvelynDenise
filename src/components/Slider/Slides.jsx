import React from "react";
import aboutPhoto from "../../media/FotoAbout.jpg"

const slidesInfo = [

    {
        src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "altInfo 1",
        desc: "altInfo 1"

    },
    {
        src: "/static/media/FotoAbout.eaed97931f0eeeb578b7.jpg",
        alt: "altInfo 2",
        desc: "altInfo 2"

    },
    {
        src: "{aboutPhoto}",
        alt: "altInfo 3",
        desc: "altInfo 3"

    }

] 

const slides = slidesInfo.map( slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;