import React from 'react'
import "./slider.css"
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css"
import Slides from "./slides";
import Button from '../../components/button/button.jsx';
import { BUTTON_TYPES } from '../../common/data/buttonConst';

const Slider = () => {

  return (
    <div className="carousel-container" id="slider">
      {/* <div className='carousel-title'>
        
      </div>  */}

      <div className="button-wrapper">
          <Button type={BUTTON_TYPES.TERTIARY} btnText="Portfolio →"/>
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