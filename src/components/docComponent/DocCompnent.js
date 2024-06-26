import React, { useContext, useRef, useState } from 'react'
import './styles.css'

import earthBg  from '../../images/bg/img/earth.png'
import thunderBg  from '../../images/bg/img/flash.jpg'
// import heatWave from '../../images/bg/video/first/heat-wave.mp4'
import heatWave  from '../../images/bg/img/heat-wave.png'

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
import homeIcon from '../../images/sidebar-icons/home.png'
import locationIcon from '../../images/sidebar-icons/location.png'

import { AllDataContext } from '../../App';
import Overlay from '../overlay/Overlay'
import Homecpmponent from '../homeComponent/Homecpmponent'
import CityComponent from '../cityComponent/CityComponent'


const DocCompnent = () => {
  const {showSidebar, regionsTempPage, spacCasePage} = useContext(AllDataContext)

  // const{ mainTitle,
  //   subTitle,
  //   spacCasePage?.StartingDay,
  //   spacCasePage?.allSpcWarningPoints,
  //   allSpcWeatherPoints,
  //   spcMaps,} = spacCasePage

  // console.log("StartingDay: ", StartingDay);

  const [imgFullScreenIndex, setImgFullScreenIndex] = useState(-1)
  const [zoomin, setZoomin] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [clientY, setClientY] = useState(0)
  
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
            i==0? (
              <img src={homeIcon} alt='' />
            ) :
            i == 1 ? (
              <img src={spacCasePage?.spcMaps[1]} alt='' />
              ) : i == 2 ? (
              <img src={egyptMap} alt='' />
            ) : i == 3 ?(
              <img src={thunderBg} alt='' />
            ) : i==4 ? (
              <img src={warning} alt='' />
            ) : i==5? (
              <img src={locationIcon} alt='' />
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
            {(dayData?.icon == "أمطار" || dayData?.icon == "مطر رعدي")? <span className='rain-percentage'>{dayData.rainPercentage}%</span> : null }
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

  const handleZoomeInOut = (e, index)=>{
    if(imgFullScreenIndex == index){
      setZoomin(!zoomin)
      setClientX(e.clientX);
      setClientY(e.clientY);
    } else{
      setImgFullScreenIndex(index)
      setZoomin(false)
    }
  }

  console.log("spacCasePage?.spacCaseType:", spacCasePage?.spacCaseType);
  return (
    <div className='docComponent-container'>
      <Overlay />
      <Slider ref={c => (slider = c)} {...settings}>

        <Homecpmponent />

        <div className='outer-doc-container case-maps-container'>
          {
            (spacCasePage?.spcMaps && spacCasePage?.spcMaps.length > 0)? 
            spacCasePage?.spcMaps.map((singleMap, index)=> 
              <div 
                className={`${imgFullScreenIndex==-1? "map-img-outer-container": imgFullScreenIndex == index? "map-img-outer-container img-full-screen" : "map-img-outer-container not-img-full-screen"}`} key={index} 
                onClick={(e)=>handleZoomeInOut(e, index)}                
              >
                <img 
                  src={singleMap} 
                  alt='' 
                  className={(imgFullScreenIndex == index && zoomin)? "zoomIn":"zoomOut"} 
                  style={{transformOrigin: `${clientX}px ${clientY}px`}}
                  
                />
              </div>
            )
            : null
          }
          <img src={window} alt='' className='window-icon' width='70' height='70' onClick={()=>setImgFullScreenIndex(-1)} />
        </div>

        {
          (regionsTempPage && regionsTempPage.length>0)? (
          <div className='outer-doc-container'>
            <div className='d-flex justify-content-between h-100'>
              <div className='day-container'>
                <p className='date'>
                  {regionsTempPage[0]?.weatherData[spacCasePage?.StartingDay]?.date}
                </p>
              </div>
              <div className='egy-map-container mx-auto'>
                <img src={egyptMap} alt="egyptMap" />
                <div className='ms' style={{animationDelay: "44s"}}>
                  <div className='ms-B'>
                    <div className='ms-wind-group'>
                      <img src={weatherIcons.navigationIcon} alt='' style={{transform: `rotateZ(${regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.windDirection}deg)`}} />
                      <span>
                        {regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.windStart} {" "}
                        {regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.windEnd? `: ${regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.windEnd}` : null} {" "}
                         كم/س
                        </span>
                    </div>
                    <div className='ms-wave-group'>
                      <img src={weatherIcons.waveIcon} alt='' />
                      <span> 
                        {regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.waveStart} {" "}
                        {regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.waveEnd? `: ${regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay].ms.waveEnd}` : null} {" "} متر</span>
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
                <div className='rs' style={{animationDelay: "50s"}}>
                  <div className='ms-wind-group'>
                    <img src={weatherIcons.navigationIcon} alt='' style={{transform: `rotateZ(${regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.windDirection}deg)`}} />
                    <span>
                      {regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.windStart} {" "}
                      {regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.windEnd? `: ${regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.windEnd}` : null} {" "}
                         كم/س
                    </span>
                  </div>
                  <div className='ms-wave-group'>
                    <img src={weatherIcons.waveIcon} alt='' />
                    <span>
                      {regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.waveStart} {" "}
                        {regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.waveEnd? `: ${regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay].rs.waveEnd}` : null} {" "} متر
                    </span>
                  </div>
                </div>
                <div className='region region-one' style={{animationDelay: "2s"}} >
                  {/* {drowtempAndIcon(regionsTempPage[0]?.weatherData[spacCasePage?.StartingDay], regionsTempPage[0]?.name)} */}
                  {drowtempAndIcon(regionsTempPage[0]?.weatherData[spacCasePage?.StartingDay], "القاهرة الكبرى")}
                </div>
                <div className='region region-two' style={{animationDelay: "9s"}}>
                {/* {drowtempAndIcon(regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay], regionsTempPage[1]?.name)} */}
                {drowtempAndIcon(regionsTempPage[1]?.weatherData[spacCasePage?.StartingDay], "السواحل الشمالية الغربية")}
                </div>
                <div className='region region-three' style={{animationDelay: "16s"}}>
                {/* {drowtempAndIcon(regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay], regionsTempPage[2]?.name)} */}
                {drowtempAndIcon(regionsTempPage[2]?.weatherData[spacCasePage?.StartingDay], "السواحل الشمالية الشرقية")}
                </div>
                <div className='region region-four' style={{animationDelay: "23s"}}>
                {drowtempAndIcon(regionsTempPage[3]?.weatherData[spacCasePage?.StartingDay], regionsTempPage[3]?.name)}
                </div>
                <div className='region region-five' style={{animationDelay: "30s"}}>
                {drowtempAndIcon(regionsTempPage[4]?.weatherData[spacCasePage?.StartingDay], regionsTempPage[4]?.name)}
                </div>
                <div className='region region-six' style={{animationDelay: "37s"}}>
                {drowtempAndIcon(regionsTempPage[5]?.weatherData[spacCasePage?.StartingDay], regionsTempPage[5]?.name)}
                </div>
              </div>
            </div>
          </div>
          ) : null
        }


        {
          (spacCasePage?.allSpcWeatherPoints && spacCasePage?.allSpcWeatherPoints.length>0)? (
            <div className='outer-doc-container '>
              <div className='img-bg'>
                {/* {
                  spacCasePage?.spacCaseType == "heatWave"? ( 
                    <video autoPlay muted >
                      <source  src={heatWave}  type="video/mp4"/>
                    </video>              
                    ):(
                    <img alt='' src={spacCasePage?.spacCaseType== "thunder"? thunderBg : spacCasePage?.spacCaseType== "heatWave"? heatWave : ""} />
                  )

                } */}
                <img alt='' src={spacCasePage?.spacCaseType== "thunder"? thunderBg : spacCasePage?.spacCaseType== "heatWave"? heatWave : ""} />
              </div>
            <div className='doc-text-overlay'>
              
              <div className='header'>
                <p className='title'>
                  {spacCasePage?.mainTitle}
                </p>
                <p className='sub-title'>
                  {spacCasePage?.subTitle}
                </p>
              </div>
              {
                spacCasePage?.allSpcWeatherPoints? (
                  <ul className='doc-text-body'>
                  {
                    spacCasePage?.allSpcWeatherPoints.map((state, stateIndex)=>
                    <li key={stateIndex} style={{animationDelay: `${stateIndex*4 + 6}s`}}>
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
          (spacCasePage?.allSpcWarningPoints && spacCasePage?.allSpcWarningPoints.length>0)? (
            <div className='outer-doc-container'>
              <div className='img-bg'>
                <img alt='' src={spacCasePage?.spacCaseType== "thunder"? thunderBg : spacCasePage?.spacCaseType== "heatWave"? heatWave : ""} />
              </div>
            <div className='doc-text-overlay'>
              <div className='header'>
                <p className='title' style={{animationDelay: "2s"}}>
                  تحذيرات ونصائح
                </p>
                {/* <p className='sub-title'>
                  {subTitle}
                </p> */}
              </div>
              {
                spacCasePage?.allSpcWarningPoints? (
                  <ul className='doc-text-body' style={{animationDelay: "3s"}}>
                  {
                    spacCasePage?.allSpcWarningPoints.map((state, stateIndex)=>
                    <li key={stateIndex} style={{animationDelay: `${stateIndex*3 + 5}s`}}>
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
        

        <CityComponent />

      </Slider>
     
    </div>
  )
}

export default DocCompnent
