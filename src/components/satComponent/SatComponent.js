import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import sat1 from '../../images/sats/sat1.jpeg'
import sat2 from '../../images/sats/sat2.jpeg'
import sat3 from '../../images/sats/sat3.jpeg'

const SatComponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const sats = [
    {src: sat1, alt: 'sat1'},
    {src: sat2, alt: 'sat2'},
    {src: sat3, alt: 'sat3'},
  ]
  return (
    <div className='satComponent-container'>
    <Slider {...settings}>
      {
        sats.map(({src, alt}, index)=><div className='img-container' key={index}>
          <img src={src} alt={alt} />
        </div>)
      }
    </Slider>
  </div>
  )
}

export default SatComponent