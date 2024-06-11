import React, { useContext, useRef, useState, useEffect } from 'react'
import './styles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import bg from '../../images/emaOne.jpg'

import bgVideo_One from '../../images/bg/video/first/Clouds-three.mp4'
import bgVideo_Two from '../../images/bg/video/first/africa.mp4'
import bgVideo_Three from '../../images/bg/video/first/global2.mp4'
import bgVideo_Four from '../../images/bg/video/first/global3.mp4'

import { AllDataContext } from '../../App'
// import bgVideo from '../../images/bg/video/first/Cloud-four.mp4'



const Homecpmponent = () => {
  const {regionsTempPage, showSidebar} = useContext(AllDataContext)

  const {generalWeatherState, videoDelay, videoBackgroundValue} = useContext(AllDataContext)
  const [videoPaused, setVideoPaused] = useState(false)
  const [videoAutoPlay, setVideoAutoPlay] = useState(false)
  // const [videoBackgroundValue, setDisplayedVideo] = useState(4)
  
  const pauseVideo = ()=>{
    if(videoBackgroundValue ==2){
      vidRef.current.pause();
    }
    setVideoPaused(true)
  }
  const vidRef = useRef(null);

  const delayTime = videoBackgroundValue ==2? (+videoDelay*1000) : 0
  
  useEffect(
    () => {
      let timer1 = setTimeout(() => setVideoAutoPlay(true), delayTime);
      let timer2 = setTimeout(() => pauseVideo(), (delayTime + 20000));
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    },[]
  );

  const srcVideo = videoBackgroundValue == 1? bgVideo_One : videoBackgroundValue == 2? bgVideo_Two : videoBackgroundValue == 3? bgVideo_Three : videoBackgroundValue == 4? bgVideo_Four : bgVideo_Three

  return (
    <div>
      <div className='bg' onClick={pauseVideo}>
        {/* <img src={bg} alt='bg' /> */}
        <video autoPlay={videoAutoPlay} muted loop={videoBackgroundValue !=2} ref={vidRef}>
          <source  src={srcVideo}  type="video/mp4"/>
        </video>

      {
        generalWeatherState?.length>0? (
        <p className={`head  ${videoPaused? 'moved' : ""}`}>
          <span>الحالة</span>
          <span>الجوية</span>
        </p>

        ):null
      }
        {
          generalWeatherState? (
            <ul className={`state-list ${videoPaused? 'showen' : ""}`}>
          {
            generalWeatherState.map((state, index)=>
            <li key={index} style={{animationDelay: `${(index*2) + 2}s`}}>
              <p key={index} className="" style={{animationDelay: `${(index*2) + 2}s`}}>
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
  )
}

export default Homecpmponent
