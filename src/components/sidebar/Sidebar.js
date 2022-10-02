import React from 'react'
import './styles.css'

import homeIcon from '../../images/sidebar-icons/home.svg'
import mapIcon from '../../images/sidebar-icons/map2.jpg'
import sat1Icon from '../../images/sidebar-icons/sat1.jpg'
import docIcon from '../../images/sidebar-icons/doc.svg'

const Sidebar = ({onClick}) => {
  const icons = [
    {src: homeIcon, alt: 'homeIcon', text: 'home'},
    {src: mapIcon, alt: 'mapIcon', text: 'map'},
    {src: sat1Icon, alt: 'sat1Icon', text: 'sat'},
    {src: docIcon, alt: 'docIcon', text: 'doc'},
    {src: docIcon, alt: 'docIcon', text: 'city'},
  ]
  return (
    <div className='sidebar-container'>
      {
        icons.map(({src, alt, text}, index)=><div className='sidebar-item' key={index} onClick={()=>onClick(text)}>
          <img src={src} alt={alt} width='30' height='30' />
        </div>)
      }
    </div>
  )
}

export default Sidebar