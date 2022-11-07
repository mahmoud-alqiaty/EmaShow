import React, { useState } from 'react'
import './styles.css'

import homeIcon from '../../images/sidebar-icons/home.svg'
import mapIcon from '../../images/sidebar-icons/dribbble.svg'
import docIcon from '../../images/sidebar-icons/copy.svg'
import cityIcon from '../../images/sidebar-icons/chart-pie-alt.svg'

import up_square from '../../images/sidebar-icons/double-up-sign-circle.svg'
// import up_square from '../../images/sidebar-icons/up-circle-2.svg'


const Sidebar = ({onClick}) => {
  const [showsidebar, setShowsidebar] = useState(true)
  const icons = [
    {src: homeIcon, alt: 'homeIcon', text: 'home'},
    {src: mapIcon, alt: 'mapIcon', text: 'map'},
    {src: docIcon, alt: 'docIcon', text: 'doc'},
    {src: cityIcon, alt: 'cityIcon', text: 'city'},
  ]
  
  return (
    <div className='sidebar-container' style={{transform: showsidebar? "translate(-50%, 0)":"translate(-50%, 85px)"}}>
      {/* <img src={up_square} alt='' style={{transform: showsidebar? "rotate(180deg)": "rotate(0deg)"}} className='toggle-icon' onClick={()=>setShowsidebar(!showsidebar)} /> */}
      {
        icons.map(({src, alt, text}, index)=>
          <div className='sidebar-item' key={index} onClick={()=>onClick(text)}>
            <img src={src} alt={alt} />
          </div>
        )
      }
    </div>
  )
}

export default Sidebar