import React from 'react'
import "./slider.css"
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./slides";
// import aboutPhoto from "../../media/FotoAbout.jpg"

const Slider = () => {


  return (
    <div className="carousel-container">
      <div className='carousel-title'>
        
      </div>

      <Carousel 
          plugins={['arrows']}
          slidesPerPage={3}
          infinite
          animationSpeed={200}
          centered
          offset={50}
          itemWidth={400}
          slides={Slides}
          breakpoints={{
            960: {
              slidesPerPage: 1,
              arrows: false,
              itemWidth: 250
            }
          }}
        />

    </div>
  )
}

export default Slider;