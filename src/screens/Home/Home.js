import React, { useState } from 'react'
import './Styles.css'


import Sidebar from '../../components/sidebar/Sidebar'

import Homecpmponent from '../../components/homeComponent/Homecpmponent';
import Mapcomponent from '../../components/mapcomponent/Mapcomponent';
import SatComponent from '../../components/satComponent/SatComponent';
import DocCompnent from '../../components/docComponent/DocCompnent';
import CityComponent from '../../components/cityComponent/CityComponent';


const Home = () => {

  const [show, setShow] = useState("ma")

  const onClick = (screen) =>{
    setShow(screen)
  }

 
  return (
    <div className='home-container'>
        <div className='home-content'>
          {
            show ==="home"? <Homecpmponent /> :
            show === "map"? <Mapcomponent /> :
            show === "sat"? <SatComponent /> :
            show === "doc"? <DocCompnent /> : <CityComponent />

          }
        </div>
        <Sidebar onClick={onClick} />
        
    </div>
  )
}

export default Home