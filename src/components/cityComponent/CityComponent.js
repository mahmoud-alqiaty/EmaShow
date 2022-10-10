import React, { useRef } from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import MainInfoItem from './InfoItem';
import SecInfoItem from './SecInfoItem';

import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';



import { cities, dates } from './data';


const CityComponent = () => {
  let slider = useRef()
  const next = () => {
    slider.slickNext();
  }
  const previous = () => {
    slider.slickPrev();
  }
    const settings = {
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        touchMove: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
      };
     
  return (
    <div className='mapComponent-container'>
        <Slider ref={c => (slider = c)} {...settings}>
          {
            cities.map(({src, alt, name, weatherData}, index)=><div className='img-container' key={index+1}>
              <img src={src} alt={alt} />
              <div className='info-container'>
                <div className='row city-name-container mb-2'>
                  <div className='city-name col-12'>
                    {name}
                  </div>
                </div>
                <div className='row items'>
                  <div className='col-5 p-0 d-flex flex-column justify-content-between align-items-center'>
                      <SecInfoItem weatherData={weatherData[1]} date={dates[1]}  />
                      <SecInfoItem weatherData={weatherData[2]} date={dates[2]} />
                      <SecInfoItem weatherData={weatherData[3]} date={dates[3]} />
                  </div>
                  <div className='col-1'></div>
                  <div className='col-6 p-0'>
                    <MainInfoItem weatherData={weatherData[0]} date={dates[0]} />
                  </div>
                </div>
              </div>
            </div>)
          }
        </Slider>

        <div style={{ textAlign: "center", position:'absolute', top:'50%', left:'20%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
          <div className='' style={{height: '90px', width: '7px', background: '#000'}}></div>
          {/* <div className='' style={{width: '90px', height: '7px', background: '#000'}}></div> */}
          <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
        </div>
    </div>
  )
}

export default CityComponent