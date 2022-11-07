import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons'
import temperatureIcon  from '../../images/cities/temperature_icon.png';

import './firstDayStyles.css'


const FirstDay = ({weatherDay, weatherNight, name, bg}) => {
  return (
    <div className='firstDay-card'>
        <img src={bg} alt='' className='region-bg' />
        <div className='region-data'>
            <div className='region-name'>
                <p className=''>
                    {name}
                </p>
            </div>

            
        </div>
    </div>
  )
}

export default FirstDay