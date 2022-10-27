import React from 'react'
import "./Slider.css"
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./Slides";
// import aboutPhoto from "../../media/FotoAbout.jpg"

const Slider = () => {


  return (
    <div className="carousel-container">
      <div className='carousel-title'>
        
        <h2>My project</h2>

      </div>

      <Carousel 
          arrows
          slidesPerPage={3}
          infinite
          animationSpeed={200}
          centered
          offset={50}
          itemWidth={400}
          slides={Slides}
        />

    </div>
  )
}

export default Slider;