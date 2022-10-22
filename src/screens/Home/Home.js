import React, { useState } from 'react'
import './Styles.css'

import Sidebar from '../../components/sidebar/Sidebar'

import Homecpmponent from '../../components/homeComponent/Homecpmponent';
import Mapcomponent from '../../components/mapcomponent/Mapcomponent';
import DocCompnent from '../../components/docComponent/DocCompnent';
import CityComponent from '../../components/cityComponent/CityComponent';

const Home = () => {
  const [show, setShow] = useState("home")

  const onClick = (screen) =>{
    setShow(screen)
  }

  return (
    <div className='home-container'>
        <div className='home-content'>
          {
            show === "home"? <Homecpmponent /> :
            show === "map"? <Mapcomponent /> :
            show === "doc"? <DocCompnent /> : <CityComponent />
          }
        </div>
        <Sidebar onClick={onClick} />
        <div className='copyright'>
          <p>الهيئة العامة للأرصاد الجوية  &copy; 2022</p>
        </div>
    </div>
  )
}

export default Home