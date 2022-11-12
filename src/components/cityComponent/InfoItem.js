import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons';
import temperatureIcon  from '../../images/cities/temperature_icon.png';
import windIcon  from '../../images/weather-icons/static/wind-four.png';
import rainynightIcon from '../../images/weather-icons/static/night-rain.png'


const MainInfoItem = ({weatherDay, weatherNight, date, isRegionCairo}) => {
  return (
    <div className='InfoItem-container h-100'>
        <div className='card h-100 pt-4'>
            <div className='h-100'>
                <div className='date-container mb-5'>
                    <p className='day'>
                        {weatherDay?.date}
                    </p>
                </div>
                <div className='all-day'>
                    <div className='icon-container periods-container d-flex align-items-center justify-content-between px-3 row'>
                        {/* night */}
                        <div className='col-5 d-flex flex-column align-items-center'>
                            <div className='period-name'>
                                <p>ليــلاً</p>
                            </div>
                            <img src={(weatherNight?.icon == "ممطر" || weatherNight?.icon == "مطر رعدي") ? rainynightIcon :  weatherIcons[weatherNight?.icon]} alt='icon' />
                            <p className='Phenomena-name' style={{lineHeight: weatherNight?.icon == "ممطر"&& 1}}>{weatherNight?.icon} {(weatherNight?.icon == "ممطر" || weatherNight?.icon == "مطر رعدي") ? <span className='rain-percentage'>%{weatherNight?.rainPercentage}</span> : null } 
                            <br /> 
                            {(weatherNight?.icon == "ممطر" || weatherNight?.icon == "مطر رعدي") ? <span className='raining-weight'>{weatherNight?.rainingWeight
                            }</span> : "" }
                            </p>
                            
                            
                            <p className='city-temp'>
                                <img src={temperatureIcon} className='temperatureIcon' alt='' />
                                <span>
                                {weatherNight?.minTemp} 
                                <span style={{color: "#ddcd6f", marginLeft: "5px"}}><sup>o</sup>c</span></span>
                            </p>
                            <p className='city-wind'>
                            {/* <img src={windIcon} alt='' /> */}
                            <span>
                                {weatherNight?.wind}
                            </span>
                            <span style={{color: "#ddcd6f", marginLeft: "5px"}}>km/h</span>
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
                            <p className='Phenomena-name' style={{lineHeight: weatherDay?.icon == "ممطر"&& 1}}>{weatherDay?.icon} {(weatherDay?.icon == "ممطر" || weatherDay?.icon == "مطر رعدي") ? <span className='rain-percentage'>%{weatherDay?.rainPercentage}</span> : null } 
                            <br /> 
                            {(weatherDay?.icon == "ممطر" || weatherDay?.icon == "مطر رعدي") ? <span className='raining-weight'>{weatherDay?.rainingWeight
                            }</span> : <span> </span> }
                            </p>
                            <p className='city-temp'>
                                <img src={temperatureIcon} className='temperatureIcon' alt='' />
                                <span>
                                {weatherDay?.maxTemp} 
                                <span style={{color: "#ddcd6f", marginLeft: "5px"}}><sup>o</sup>c</span>
                                
                                </span>
                            </p>
                            <p className='city-wind'>
                                {/* <img src={windIcon} alt='' /> */}
                                <span>
                                    {weatherDay?.wind}
                                </span>
                                <span style={{color: "#aadd6f", marginLeft: "5px"}}> km/h</span>
                            </p>
                        </div>
                    </div>
                    {
                        weatherDay.notes? (
                            <div className='note mx-1 mx-lg-4 mb-3'>
                                <span>{ weatherDay.notes}</span>
                            </div>
                        ):null
                    }

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MainInfoItem