import React, { useContext, useRef } from 'react'
import './styles.css'

import earthBg  from '../../images/bg/img/earth.png'
import thunderBg  from '../../images/bg/img/flash.jpg'

import {weatherIcons} from '../../constants/weatherIcons'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import egyptMap from '../../images/Egypt_map_2.png'


import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';
import { AllDataContext } from '../../App';


const DocCompnent = () => {
  const {regionsTempPage, spacCasePage: {
    mainTitle,
    subTitle,
    StartingDay,
    allSpcWarningPoints,
    allSpcWeatherPoints,
    spcMaps,
  }} = useContext(AllDataContext)
  
 
  
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const drowtempAndIcon = (dayData)=>{
    return(
      <div className='region-weather custom-tooltip'>
        <img src={weatherIcons[dayData?.icon]} alt='icon' />
        <div className='region-temp'>
          <span className='maxTemp' >
            {dayData?.maxTemp}<sup>o</sup>c
          </span>
          <span className='divider'></span>
          <span className='minTemp'>
            {dayData?.minTemp}<sup>o</sup>c
            </span>
        </div>
        {/* <span class="tooltiptext">
        لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة 
        </span> */}
      </div>
    )
  }

  return (
    <div className='docComponent-container'>
        <Slider ref={c => (slider = c)} {...settings}>

          {
            (allSpcWeatherPoints && allSpcWeatherPoints.length>0)? (
              <div className='outer-doc-container '>
                <div className='img-bg'>
                  <img alt='' src={thunderBg} />
                </div>
              <div className='doc-text-overlay'>
                
                <div className='header'>
                  <p className='title'>
                    {mainTitle}
                  </p>
                  <p className='sub-title'>
                    {subTitle}
                  </p>
                </div>
                {
                  allSpcWeatherPoints? (
                    <ul className='doc-text-body'>
                    {
                      allSpcWeatherPoints.map((state, stateIndex)=>
                      <li key={stateIndex} style={{animationDelay: `${stateIndex + 2}s`}}>
                        <p>
                          {state}
                        </p>
                      </li>
                      )
                    }
                  </ul>
                  ) : null
                }
              </div>           
            </div>
            ):null
          }

          {
            (spcMaps && spcMaps.length > 0)? 
            spcMaps.map((singleMap, index)=>
              <div className='outer-doc-container' key={index}>
                <div className='map-img-outer-container'>
                  <div className='map-img-inner-container'>
                    <img src={singleMap} alt=''  />
                  </div>
                </div>
              </div>
            )
            : null
          }
          
          {
           (regionsTempPage && regionsTempPage.length>0)? (
            <div className='outer-doc-container'>
              <div className='d-flex justify-content-between h-100'>
                <div className='egy-map-container mx-auto'>
                  <img src={egyptMap} alt="egyptMap" />
                  <div className='region region-one'>
                    {drowtempAndIcon(regionsTempPage[0]?.weatherData[StartingDay])}
                  </div>
                  <div className='region region-two'>
                  {drowtempAndIcon(regionsTempPage[1]?.weatherData[StartingDay])}
                  </div>
                  <div className='region region-three'>
                  {drowtempAndIcon(regionsTempPage[2]?.weatherData[StartingDay])}
                  </div>
                  <div className='region region-four'>
                  {drowtempAndIcon(regionsTempPage[2]?.weatherData[StartingDay])}
                  </div>
                  <div className='region region-five'>
                  {drowtempAndIcon(regionsTempPage[3]?.weatherData[StartingDay])}
                  </div>
                  <div className='region region-six'>
                  {drowtempAndIcon(regionsTempPage[4]?.weatherData[StartingDay])}
                  </div>
                </div>
              </div>
            </div>
           ) : null
          }


          {
            (allSpcWarningPoints && allSpcWarningPoints.length>0)? (
              <div className='outer-doc-container'>
              <div className='doc-text-overlay'>
                <div className='header'>
                  <p className='title'>
                    تحذيرات
                  </p>
                  {/* <p className='sub-title'>
                    {subTitle}
                  </p> */}
                </div>
                {
                  allSpcWarningPoints? (
                    <ul className='doc-text-body'>
                    {
                      allSpcWarningPoints.map((state, stateIndex)=>
                      <li key={stateIndex} style={{animationDelay: `${stateIndex + 1}s`}}>
                        <p>
                          {state}
                        </p>
                      </li>
                      )
                    }
                  </ul>
                  ) : null
                }
              </div>           
            </div>
            ):null
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

export default DocCompnent