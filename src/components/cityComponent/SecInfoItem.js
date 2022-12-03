import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons'
import './styles2.css'

const SecInfoItem = ({weatherData}) => {
    return (
      <div className='InfoItem-container2'>
          <div className='date-container2 row'>
              <p className='col-12 day mb-1 mb-lg-2'>
                {weatherData?.date}
              </p>
          </div>
              
          <div className='card-footer row mx-0'>
            <div className='temp col-8 col-lg-6 d-flex align-items-center'>
                <p>
                  <span style={{color: 'red'}}>{weatherData?.maxTemp}</span>
                  <span style={{color: "#000"}}> -</span>
                  <span> {weatherData?.minTemp}</span>
                  <span style={{color: "#003651", marginLeft: "5px"}}><sup> o</sup>c</span>
                  
                </p>
            </div>
            <div className='icon-container col-4 col-lg-6 d-flex flex-column align-items-end'>
                <img src={weatherIcons[weatherData?.icon]} alt='icon2' width='30' height='30' />
                {(weatherData?.icon == "أمطار" || weatherData?.icon == "مطر رعدي")? <span className='rain-percentage' >{weatherData.rainPercentage}%</span> : null }
                <span style={{color: "#fff", fontSize: "1.3rem"}}>{weatherData?.icon}</span>
            </div>
          </div>
      </div>
    )
  }

  export default SecInfoItem