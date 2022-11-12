import React, { useContext, useRef, useState } from 'react'
import './styles.css'

import earthBg  from '../../images/bg/img/earth.png'
import thunderBg  from '../../images/bg/img/flash.jpg'

import {weatherIcons} from '../../constants/weatherIcons'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import egyptMap from '../../images/Egypt-map-8.jpg'
// import egyptMap from '../../images/Egypt-map-three.jpg'
// import egyptMap from '../../images/Egypt-map-mobile.jpg'


import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';
import window from '../../images/arrow-icons/window.svg';
import warning from '../../images/arrow-icons/warning-alt.svg';
import { AllDataContext } from '../../App';
import Overlay from '../overlay/Overlay'


const DocCompnent = () => {
  const {showSidebar, regionsTempPage, spacCasePage: {
    mainTitle,
    subTitle,
    StartingDay,
    allSpcWarningPoints,
    allSpcWeatherPoints,
    spcMaps,
  }} = useContext(AllDataContext) 

  console.log("StartingDay: ", StartingDay);

  const [imgFullScreenIndex, setImgFullScreenIndex] = useState(-1)
  
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
        <a>
          {
            i == 0 ? (
              <img src={thunderBg} alt='' />
            ) : i == 1 ? (
              <img src={spcMaps[1]} alt='' />
            ) : i == 2 ?(
              <img src={egyptMap} alt='' />
            ) : i==3 ? (
              <img src={warning} alt='' />
            ) : null
          }
          
        </a>
      );
    },
    dots: showSidebar,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const drowtempAndIcon = (dayData, name)=>{
    return(
      <>
        <div className='region-name'>
          <span>
            {name == "جنوب سيناء وسلاسل جبال البحر الأحمر" ? "جنوب سيناء والبحر الأحمر" : name}
          </span>
        </div>
        <div className='region-weather custom-tooltip'>
          {/* <br /> */}
          <div className='d-flex mx-2 w-50 justify-content-center'>
            {(dayData?.icon == "ممطر" || dayData?.icon == "مطر رعدي")? <span className='rain-percentage'>{dayData.rainPercentage}%</span> : null }
            <img src={weatherIcons[dayData?.icon]} alt='icon' style={{objectFit: dayData?.icon == "مشمس"? "contain" : "cover"}} />

          </div>
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
      </>
    )
  }

  return (
    <div className='docComponent-container'>
      <Overlay />
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
                    <li key={stateIndex} style={{animationDelay: `${stateIndex*1.5 + 3}s`}}>
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

        <div className='outer-doc-container case-maps-container'>
          {
            (spcMaps && spcMaps.length > 0)? 
            spcMaps.map((singleMap, index)=>
              <div 
                className={`${imgFullScreenIndex == index? "img-full-screen" : ""} map-img-outer-container`} key={index} 
                onClick={()=>{imgFullScreenIndex == index? setImgFullScreenIndex(-1) : setImgFullScreenIndex(index)}}
                // style={{height: `{$(2/spcMaps.length)*100}%`}}
              >
                <img src={singleMap} alt=''  />
              </div>
            )
            : null
          }
          {/* <img src={window} alt='' className='window-icon' width='70' height='70' onClick={()=>setImgFullScreenIndex(-1)} /> */}
        </div>
        
        {
          (regionsTempPage && regionsTempPage.length>0)? (
          <div className='outer-doc-container'>
            <div className='d-flex justify-content-between h-100'>
              <div className='day-container'>
                <p className='date'>
                  {regionsTempPage[0]?.weatherData[StartingDay]?.date}
                </p>
              </div>
              <div className='egy-map-container mx-auto'>
                <img src={egyptMap} alt="egyptMap" />
                <div className='ms'>
                  <div className='ms-B'>
                    <div className='ms-wind-group'>
                      <img src={weatherIcons.navigationIcon} alt='' style={{transform: `rotateZ(${regionsTempPage[1]?.weatherData[StartingDay].ms.windDirection}deg)`}} />
                      <span>
                        {regionsTempPage[1]?.weatherData[StartingDay].ms.windStart} {" "}
                        {regionsTempPage[1]?.weatherData[StartingDay].ms.windEnd? `: ${regionsTempPage[1]?.weatherData[StartingDay].ms.windEnd}` : null} {" "}
                         كم/س
                        </span>
                    </div>
                    <div className='ms-wave-group'>
                      <img src={weatherIcons.waveIcon} alt='' />
                      <span> 
                        {regionsTempPage[1]?.weatherData[StartingDay].ms.waveStart} {" "}
                        {regionsTempPage[1]?.weatherData[StartingDay].ms.waveEnd? `: ${regionsTempPage[1]?.weatherData[StartingDay].ms.waveEnd}` : null} {" "} متر</span>
                    </div>
                  </div>
                  <div className='ms-C d-none'>
                    <div className='ms-wind-group'>
                      <img src={weatherIcons.navigationIcon} alt='' />
                      <span>25 : 30 كم/س</span>
                    </div>
                    <div className='ms-wave-group'>
                      <img src={weatherIcons.waveIcon} alt='' />
                      <span>1 : 1.5 متر</span>
                    </div>
                  </div>
                </div>
                <div className='rs'>
                  <div className='ms-wind-group'>
                    <img src={weatherIcons.navigationIcon} alt='' style={{transform: `rotateZ(${regionsTempPage[2]?.weatherData[StartingDay].rs.windDirection}deg)`}} />
                    <span>
                      {regionsTempPage[2]?.weatherData[StartingDay].rs.windStart} {" "}
                      {regionsTempPage[2]?.weatherData[StartingDay].rs.windEnd? `: ${regionsTempPage[2]?.weatherData[StartingDay].rs.windEnd}` : null} {" "}
                         كم/س
                    </span>
                  </div>
                  <div className='ms-wave-group'>
                    <img src={weatherIcons.waveIcon} alt='' />
                    <span>
                      {regionsTempPage[2]?.weatherData[StartingDay].rs.waveStart} {" "}
                        {regionsTempPage[2]?.weatherData[StartingDay].rs.waveEnd? `: ${regionsTempPage[2]?.weatherData[StartingDay].rs.waveEnd}` : null} {" "} متر
                    </span>
                  </div>
                </div>
                <div className='region region-one'>
                  {drowtempAndIcon(regionsTempPage[0]?.weatherData[StartingDay], regionsTempPage[0]?.name)}
                </div>
                <div className='region region-two'>
                {drowtempAndIcon(regionsTempPage[1]?.weatherData[StartingDay], regionsTempPage[1]?.name)}
                </div>
                <div className='region region-three'>
                {drowtempAndIcon(regionsTempPage[2]?.weatherData[StartingDay], regionsTempPage[2]?.name)}
                </div>
                <div className='region region-four'>
                {drowtempAndIcon(regionsTempPage[3]?.weatherData[StartingDay], regionsTempPage[3]?.name)}
                </div>
                <div className='region region-five'>
                {drowtempAndIcon(regionsTempPage[4]?.weatherData[StartingDay], regionsTempPage[4]?.name)}
                </div>
                <div className='region region-six'>
                {drowtempAndIcon(regionsTempPage[5]?.weatherData[StartingDay], regionsTempPage[5]?.name)}
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

      <div className='arrow-controller' style={{display: showSidebar? "flex":"none"}} >
        <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
        {/* <div className='' style={{width: '50px', height: '7px', background: '#000'}}></div> */}
        <div className='' style={{height: '60px', width: '7px', background: '#000'}}></div>
        <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
      </div>
    </div>
  )
}

export default DocCompnent
