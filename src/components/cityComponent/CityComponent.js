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
  const {regionsTempPage, showSidebar} = useContext(AllDataContext)
  // console.log("regionsTempPage: ", regionsTempPage);
  const regionCities = {
    'القاهرة وجنوب الوجه البحري ومدن القناة' : "القاهرة - الجيزة - القليوبية - المنوفية - الغربية - الشرقية - الإسماعلية - السويس",
    'السواحل الشمالية الغر بية وشمال الوجه البحري': "الإسكندرية - مطروح - البحيرة - كفر الشيخ - الدقهلية",
    'السواحل الشمالية الشرقية ووسط سيناء': "دمياط - بورسعيد - شمال سيناء",
    'جنوب سيناء وسلاسل جبال البحر الأحمر': "جنوب سيناء - البحر الأحمر",
    'شمال الصعيد': "الفيوم -بني سويف - المنيا - أسيوط - سوهاج",
    'جنوب الصعيد': "قنا - الأقصر - أسوان - أبوسمبل -الوادي الجديد",
  }
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
  const name = 'القاهرة وجنوب الوجه البحري ومدن القناة'
    //  console.log("city: ", regionCities[name]);
  return (
    <div className='mapComponent-container w-100 h-100'>
      {
        (regionsTempPage && regionsTempPage.length >0) ? (
          <>
            <Slider ref={c => (slider = c)} {...settings}>
              {
                regionsTempPage.map(({name, weatherData}, index)=><div className='img-container' key={index+1}>
                  <img src={citiesBgImages[index]} alt='' className='city-img' />
                  <div className='overlay' />
                  <div className='info-container'>
                    <div className='row city-name-container mb-0 mb-lg-1 mx-0 px-0'>
                      <div className='city-name col-12'>
                        <img src={locationIcon} alt='' />
                        <span>
                        {name == "السواحل الشمالية الشرقية"? "السواحل الشمالية الشرقية ووسط سيناء" : name }
                        </span>
                      </div>
                        {/* <p className='region-cities col-12'>
                        {regionCities[name]}
                        </p> */}
                    </div>
                    <div className='row items px-0  px-0'>
                      <div className='col-5 p-0 d-flex flex-column justify-content-between align-items-center'>
                        <div className='w-100 h-100 d-flex flex-column justify-content-between align-items-center'>
                          <SecInfoItem weatherData={weatherData[2]} />
                          <SecInfoItem weatherData={weatherData[3]} />
                          <SecInfoItem weatherData={weatherData[4]} />
                        </div>
                      </div>
                      <div className='col-7 big-card'>
                        <div className='h-100'>
                          <MainInfoItem isRegionCairo={index === 0} weatherDay={weatherData[0]} weatherNight={weatherData[1]} date={weatherData[0].date} />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              }
            </Slider>

            <div style={{ textAlign: "center", position:'absolute', bottom:'0', left:'22%', alignItems: 'center', flexDirection: 'row',  zIndex: "2000", display: showSidebar? "flex":"none"}}>
              <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
              <div className='' style={{height: '60px', width: '7px', background: '#000'}}></div>
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