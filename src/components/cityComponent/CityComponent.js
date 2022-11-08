import React, { useContext, useRef } from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import MainInfoItem from './InfoItem';
import SecInfoItem from './SecInfoItem';

import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';
import locationIcon  from '../../images/cities/location_icon.png';

import { citiesBgImages } from './data';
import { AllDataContext } from '../../App';
import Overlay from '../overlay/Overlay';


const CityComponent = () => {
  const {regionsTempPage} = useContext(AllDataContext)
  console.log("regionsTempPage: ", regionsTempPage);
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
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      touchMove: true,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />
  };
     
  return (
    <div className='mapComponent-container'>
      {
        (regionsTempPage && regionsTempPage.length >0) ? (
          <>
            <Slider ref={c => (slider = c)} {...settings}>
              {
                regionsTempPage.map(({name, weatherData}, index)=><div className='img-container' key={index+1}>
                  <img src={citiesBgImages[index]} alt='' />
                  <div className='overlay' />
                  <div className='info-container'>
                    <div className='row city-name-container mb-2'>
                      <div className='city-name col-12'>
                        <img src={locationIcon} alt='' />
                        <span>
                        {name}
                        </span>
                      </div>
                    </div>
                    <div className='row items'>
                      <div className='col-5 p-0 d-flex flex-column justify-content-between align-items-center'>
                          <SecInfoItem weatherData={weatherData[2]} />
                          <SecInfoItem weatherData={weatherData[3]} />
                          <SecInfoItem weatherData={weatherData[4]} />
                      </div>
                      <div className='col-1'></div>
                      <div className='col-6 p-0'>
                        <MainInfoItem isRegionCairo={index === 0} weatherDay={weatherData[0]} weatherNight={weatherData[1]} date={weatherData[0].date} />
                      </div>
                    </div>
                  </div>
                </div>)
              }
            </Slider>

            <div style={{ textAlign: "center", position:'absolute', bottom:'0', left:'calc(60% - 320px)', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', flexDirection: 'row',  zIndex: "2000",}}>
              <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
              <div className='' style={{height: '60px', width: '7px', background: '#000'}}></div>
              {/* <div className='' style={{width: '90px', height: '7px', background: '#000'}}></div> */}
              <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
            </div>
          </>
        ) : null
      }

      <Overlay />
        
    </div>
  )
}

export default CityComponent