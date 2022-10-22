import React, { useContext, useRef, useState } from 'react'
import './styles.css'
import bg from '../../images/emaOne.jpg'
// import bgVideo from '../../images/bg/video/first/Clouds-one.mp4'
// import bgVideo from '../../images/bg/video/first/Cloude-two.mp4'
// import bgVideo from '../../images/bg/video/first/Sea-one.mp4'
import bgVideo from '../../images/bg/video/first/Clouds-three.mp4'
import { AllDataContext } from '../../App'
// import bgVideo from '../../images/bg/video/first/Cloud-four.mp4'


const Homecpmponent = () => {
  const {generalWeatherState} = useContext(AllDataContext)
  const [videoPaused, setVideoPaused] = useState(false)
  const vidRef = useRef(null);

  const pauseVideo = ()=>{
    vidRef.current.pause();
    setVideoPaused(true)
  }

  return (
    <div className='bg' onClick={pauseVideo}>
      {/* <img src={bg} alt='bg' /> */}
      <video autoPlay muted loop  ref={vidRef}>
        <source  src={bgVideo}  type="video/mp4"/>
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
      
    </div>
  )
}

export default Homecpmponent