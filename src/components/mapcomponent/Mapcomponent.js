import React, { useRef } from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import map1 from '../../images/maps/map1.jpeg'
import map2 from '../../images/maps/map2.jpeg'
import map3 from '../../images/maps/map3.jpeg'
import sat1 from '../../images/sats/sat1.gif'

import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';

const maps = [
  {src: sat1, alt: 'sat1'},
  {src: map1, alt: 'map1'},
  {src: map2, alt: 'map2'},
  {src: map3, alt: 'map3'},
]


const Mapcomponent = () => {
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
          <img src={maps[i].src} alt='' />
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
            maps.map(({src, alt}, index)=>
            <div className='map-img-outer-container' key={index}>
              <div className='map-img-inner-container'>
                <img src={src} alt={alt}  />
              </div>
            </div>)
          }
        </Slider>

        
        <div className='arrow-controller' >
          <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
          {/* <div className='' style={{width: '50px', height: '7px', background: '#000'}}></div> */}
          <div className='' style={{height: '90px', width: '7px', background: '#000'}}></div>
          <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
        </div>
      </div>
  )
}

export default Mapcomponent