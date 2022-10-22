import React, { useContext, useRef } from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';
import { AllDataContext } from '../../App';


const Mapcomponent = () => {
  const {mapsArray} = useContext(AllDataContext)
  let slider = useRef()
  const next = () => {
    slider.slickNext();
  }
  const previous = () => {
    slider.slickPrev();
  }
  const settings = {
    customPaging: function(i) {
      return (
        <a >
          <img src={mapsArray && mapsArray[i]} alt='' />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

 
  return (
      <div>
        <Slider ref={c => (slider = c)} {...settings}>
          {
            mapsArray?.map((src, index)=>
            <div className='map-img-outer-container' key={index}>
              <div className='map-img-inner-container' onClick={next}>
                <img src={src} alt=''  />
              </div>
            </div>)
          }
        </Slider>

        
        <div className='arrow-controller' >
          <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
          {/* <div className='' style={{width: '50px', height: '7px', background: '#000'}}></div> */}
          <div className='' style={{height: '60px', width: '7px', background: '#000'}}></div>
          <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
        </div>
      </div>
  )
}

export default Mapcomponent