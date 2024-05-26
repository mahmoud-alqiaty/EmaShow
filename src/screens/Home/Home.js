import React, { useContext, useState } from 'react'
import './Styles.css'

import Sidebar from '../../components/sidebar/Sidebar'

import Homecpmponent from '../../components/homeComponent/Homecpmponent';
import Mapcomponent from '../../components/mapcomponent/Mapcomponent';
import DocCompnent from '../../components/docComponent/DocCompnent';
import CityComponent from '../../components/cityComponent/CityComponent';

import up_square from '../../images/sidebar-icons/double-up-sign-circle.svg'
import { AllDataContext } from '../../App';


const Home = () => {
  const [show, setShow] = useState("doc")
  const {showSidebar, setShowSidebar} = useContext(AllDataContext)

  const onClick = (screen) =>{
    setShow(screen)
  }

  return (
    <div className='home-container'>
        <div className='home-content'>
          {
            show === "home"? <DocCompnent /> :
            show === "map"? <Mapcomponent /> :
            show === "doc"? <DocCompnent /> : <CityComponent />
          }
        </div>
        {/* <Sidebar onClick={onClick} /> */}
        <div className='copyright'>
          <p>الهيئة العامة للأرصاد الجوية  &copy; 2022</p>
        </div>
        <img src={up_square} alt='' style={{transform: showSidebar? "rotate(180deg)": "rotate(0deg)"}} className='toggle-icon' onClick={()=>setShowSidebar(!showSidebar)} />
    </div>
  )
}

export default Home