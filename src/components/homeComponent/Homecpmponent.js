import React, { useContext, useRef, useState } from 'react'
import './styles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import bg from '../../images/emaOne.jpg'

import bgVideo_One from '../../images/bg/video/first/Clouds-three.mp4'
import bgVideo_Two from '../../images/bg/video/first/africa.mp4'
import bgVideo_Three from '../../images/bg/video/first/global2.mp4'
import { AllDataContext } from '../../App'
// import bgVideo from '../../images/bg/video/first/Cloud-four.mp4'

import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';
import MainInfoItem from '../cityComponent/InfoItem';
import FirstDay from './FirstDay';
import { citiesBgImages } from '../cityComponent/data';


const Homecpmponent = () => {
  const {regionsTempPage, showSidebar} = useContext(AllDataContext)

  const {generalWeatherState} = useContext(AllDataContext)
  const [videoPaused, setVideoPaused] = useState(false)
  const [displayedVideo, setDisplayedVideo] = useState(3)

  const vidRef = useRef(null);

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
     

  const pauseVideo = ()=>{
    vidRef.current.pause();
    setVideoPaused(true)
  }

  const srcVideo = displayedVideo == 1? bgVideo_One : displayedVideo == 2? bgVideo_Two : displayedVideo == 3? bgVideo_Three : bgVideo_Two

  return (
    <div>
      <div className='bg' onClick={pauseVideo}>
        {/* <img src={bg} alt='bg' /> */}
        <video autoPlay muted  ref={vidRef}>
          <source  src={srcVideo}  type="video/mp4"/>
        </video>
        <p className={`head  ${videoPaused? 'moved' : ""}`}>
          <span>الحالة</span>
          <span>الجوية</span>
        </p>
        {
          generalWeatherState? (
            <ul className={`state-list ${videoPaused? 'showen' : ""}`}>
          {
            generalWeatherState.map((state, index)=>
            <li key={index} style={{animationDelay: `${index + 1}s`}}>
              <p key={index} className="">
                {state}
              </p>
            </li>
            )
          }
        </ul>
          ) : null
        }

        <div className='arrow-controller d-none' >
        <img src={prevtIcon} alt='prevtIcon' width='75' height='75' />
        {/* <div className='' style={{width: '50px', height: '7px', background: '#000'}}></div> */}
        <div className='' style={{height: '60px', width: '7px', background: '#000'}}></div>
        <img src={nextIcon} alt='nextIcon' width='75' height='75' />
        </div>

        {/* <div className='home-settings'>
          <input type='number' min={1} max={3} onChange={e=> setDisplayedVideo(e.target.value)} />
        </div> */}
        
      </div>

      {/* <div className='first-days-container'>
        {
          regionsTempPage?.map(({name, weatherData}, index)=>
            <FirstDay weatherDay={weatherData[0]} weatherNight={weatherData[1]} name={name} bg={citiesBgImages[index]} />
          )
        }
      </div> */}


      <div style={{ textAlign: "center", position:'absolute', bottom:'0', left:'calc(60% - 320px)', transform: 'translateX(-50%)', alignItems: 'center', flexDirection: 'row',  zIndex: "2000", display: showSidebar? "none":"none"}}>
        <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
        <div className='' style={{height: '60px', width: '7px', background: '#000'}}></div>
        {/* <div className='' style={{width: '90px', height: '7px', background: '#000'}}></div> */}
        <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
      </div>
      
    </div>
  )
}

export default Homecpmponent