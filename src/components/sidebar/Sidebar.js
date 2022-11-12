import React, { useContext } from 'react'
import './styles.css'

import homeIcon from '../../images/sidebar-icons/home.svg'
import mapIcon from '../../images/sidebar-icons/dribbble.svg'
import docIcon from '../../images/sidebar-icons/copy.svg'
import cityIcon from '../../images/sidebar-icons/chart-pie-alt.svg'
import { AllDataContext } from '../../App'

const Sidebar = ({onClick}) => {
  const {showSidebar} = useContext(AllDataContext)
  const icons = [
    {src: homeIcon, alt: 'homeIcon', text: 'home'},
    {src: mapIcon, alt: 'mapIcon', text: 'map'},
    {src: docIcon, alt: 'docIcon', text: 'doc'},
    {src: cityIcon, alt: 'cityIcon', text: 'city'},
  ]
  
  return (
    <div className='sidebar-container' style={{display: showSidebar? "flex":"none"}}>
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