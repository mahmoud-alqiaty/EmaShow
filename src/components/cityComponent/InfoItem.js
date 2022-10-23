import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons';
import temperatureIcon  from '../../images/cities/temperature_icon.png';
import windIcon  from '../../images/weather-icons/static/wind-four.png';


const MainInfoItem = ({weatherDay, weatherNight, date}) => {
  return (
    <div className='InfoItem-container h-100'>
        <div className='card h-100 pt-4'>
            <div className=''>
                <div className='date-container mb-5'>
                    <p className='day'>
                        {weatherDay?.date}
                    </p>
                </div>
                <div className='icon-container periods-container d-flex align-items-center justify-content-between px-3 row'>
                    {/* night */}
                    <div className='col-5 d-flex flex-column align-items-center'>
                        <div className='period-name'>
                            <p>ليــلاً</p>
                        </div>
                        <img src={weatherIcons[weatherNight?.icon]} alt='icon' />
                        <p className='Phenomena-name'>{weatherNight?.icon}</p>
                        <p className='city-temp'>
                            <img src={temperatureIcon} alt='' />
                            <span>
                            {weatherNight?.minTemp} <sup>o</sup>c
                            </span>
                        </p>
                        <p className='city-wind'>
                        {/* <img src={windIcon} alt='' /> */}
                        <span>
                            {weatherNight?.wind} km/h
                        </span>
                        </p>
                    </div>
                    <div className='col-1'>
                        <div className='divider '></div>
                    </div>
                    {/* day */}
                    <div className='col-5 d-flex flex-column align-items-center'>
                        <div className='period-name'>
                            <p>نهــاراً</p>
                        </div>
                        <img src={weatherIcons[weatherDay?.icon]} alt='icon' />
                        <p className='Phenomena-name'>{weatherDay?.icon}</p>
                        <p className='city-temp'>
                            <img src={temperatureIcon} alt='' />
                            <span>
                            {weatherDay?.maxTemp} <sup>o</sup>c
                            </span>
                        </p>
                        <p className='city-wind'>
                            {/* <img src={windIcon} alt='' /> */}
                            <span>
                                {weatherDay?.wind} km/h
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainInfoItem