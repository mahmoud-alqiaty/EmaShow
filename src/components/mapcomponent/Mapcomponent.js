import React from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import map1 from '../../images/maps/map1.jpeg'
import map2 from '../../images/maps/map2.jpeg'
import map3 from '../../images/maps/map3.jpeg'

const Mapcomponent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const maps = [
    {src: map1, alt: 'map1'},
    {src: map2, alt: 'map2'},
    {src: map3, alt: 'map3'},
  ]
  return (
      <div className='mapComponent-container'>
        <Slider {...settings}>
          {
            maps.map(({src, alt}, index)=><div className='img-container' key={index}>
              <img src={src} alt={alt} />
            </div>)
          }
        </Slider>
      </div>
  )
}

export default Mapcomponent