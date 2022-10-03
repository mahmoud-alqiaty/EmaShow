import React from 'react'
import './styles2.css'

const SecInfoItem = ({weatherData, date}) => {
    return (
      <div className='InfoItem-container2'>
          <div className='date-container2 row'>
              <p className='col-12 day'>
                {date}
              </p>
          </div>
              
          <div className='card-footer row'>
            <div className='temp col-6'>
                <p>
                  {weatherData.maxTemp} - {weatherData.minTemp} <sup>o</sup>c
                </p>
            </div>
            <div className='icon-container col-6'>
                <img src={weatherData.icon} alt='icon2' />
            </div>
          </div>
      </div>
    )
  }

  export default SecInfoItem