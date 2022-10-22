import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons'
import './styles2.css'

const SecInfoItem = ({weatherData}) => {
    return (
      <div className='InfoItem-container2'>
          <div className='date-container2 row'>
              <p className='col-12 day'>
                {weatherData?.date}
              </p>
          </div>
              
          <div className='card-footer row'>
            <div className='temp col-6 d-flex align-items-center'>
                <p>
                  {weatherData?.maxTemp} - {weatherData?.minTemp} <sup>o</sup>c
                </p>
            </div>
            <div className='icon-container col-6 d-flex justify-content-end'>
                <img src={weatherIcons[weatherData?.icon]} alt='icon2' width='30' height='30' />
            </div>
          </div>
      </div>
    )
  }

  export default SecInfoItem