import React from 'react'
import './styles.css'

import homeIcon from '../../images/sidebar-icons/home-alt-3.svg'
import mapIcon from '../../images/sidebar-icons/world.svg'
import sat1Icon from '../../images/sidebar-icons/signal.svg'
import docIcon from '../../images/sidebar-icons/copy.svg'
import cityIcon from '../../images/sidebar-icons/chart-pie-alt.svg'

const Sidebar = ({onClick}) => {
  const icons = [
    {src: homeIcon, alt: 'homeIcon', text: 'home'},
    {src: mapIcon, alt: 'mapIcon', text: 'map'},
    {src: sat1Icon, alt: 'sat1Icon', text: 'sat'},
    {src: docIcon, alt: 'docIcon', text: 'doc'},
    {src: cityIcon, alt: 'cityIcon', text: 'city'},
  ]
  return (
    <div className='sidebar-container'>
      {
        icons.map(({src, alt, text}, index)=><div className='sidebar-item' key={index} onClick={()=>onClick(text)}>
          <img src={src} alt={alt} />
        </div>)
      }
    </div>
  )
}

export default Sidebar