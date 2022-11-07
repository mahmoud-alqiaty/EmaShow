import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons'
import './styles2.css'

const SecInfoItem = ({weatherData}) => {
    return (
      <div className='InfoItem-container2'>
          <div className='date-container2 row'>
              <p className='col-12 day mb-2'>
                {weatherData?.date}
              </p>
          </div>
              
          <div className='card-footer row'>
            <div className='temp col-6 d-flex align-items-center'>
                <p>
                  <span style={{color: 'red'}}>{weatherData?.maxTemp}</span>
                  <span style={{color: "#000"}}> -</span>
                  <span> {weatherData?.minTemp}</span>
                  <span style={{color: "#c2aa23", marginLeft: "5px"}}><sup> o</sup>c</span>
                  
                </p>
            </div>
            <div className='icon-container col-6 d-flex justify-content-end'>
                {weatherData?.icon == "ممطر" ? <span style={{fontSize: "1.8rem", color: "#ddcd6f"}}>%30</span> : null }
                <img src={weatherIcons[weatherData?.icon]} alt='icon2' width='30' height='30' />
            </div>
          </div>
      </div>
    )
  }

  export default SecInfoItem