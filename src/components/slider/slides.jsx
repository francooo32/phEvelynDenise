import React from "react";
import "./slider.css" 
import {Navigate} from "react-router-dom"

const slidesInfo = [

    {
        src: require("../../public/media/persons/LULA.jpg").default,
        alt: "altInfo 1",
        desc: "Retratos",
        route: "/portfolio#retratos"
    },
    {
        src: require("../../public/media/1.jpg").default,
        alt: "altInfo 2",
        desc: "Gastronomía",
        route: "/portfolio#gastronomia"
    },
    {
        src: require("../../public/media/3.jpg").default,
        alt: "altInfo 3",
        desc: "Fotoproducto",
        route: "/portfolio#fotoproducto"
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

const slides = slidesInfo.map( slide => (
    <div className="slider-container">
        <a href={slide.route}>
        <img src={(slide.src)} alt={slide.alt} />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

//width={960} height={640}

export default slides;