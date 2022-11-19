import React from 'react'
import { weatherIcons, nightWeatherIcons } from '../../constants/weatherIcons';
import temperatureIcon  from '../../images/cities/temperature_icon.png';
import windIcon  from '../../images/cities/speedometer.png';
import rainynightIcon from '../../images/weather-icons/static/night-rain.png'
import cloudyNight from '../../images/weather-icons/static/cloudy-night.svg'


const MainInfoItem = ({weatherDay, weatherNight, date, isRegionCairo}) => {
    if(weatherNight?.icon.includes("+")){
        console.log("weatherNight?.icon: ", weatherNight?.icon);
    } else{
        console.log(weatherNight?.icon);
    }
  return (
    <div className='InfoItem-container h-100'>
        <div className='card h-100 pt-4'>
            <div className='h-100 d-flex flex-column justify-content-between'>
                <div className='date-container'>
                    <p className='day'>
                        {weatherDay?.date}
                    </p>
                </div>
                <div className='all-day'>
                    <div className='icon-container periods-container d-flex justify-content-between'>
                        {/* night */}
                        <div className='sigle-period-container'>
                            <div className='period-name'>
                                <p>ليــلاً</p>
                            </div>

                            <div>
                                <img className='weather-icons' src={nightWeatherIcons[weatherNight?.icon]} alt='icon' />
                            </div>

                            <div className='Phenomena-name-container'>
                                <p className='Phenomena-name' 
                                    style={{lineHeight: weatherNight?.icon == "ممطر"&& 1}}
                                >
                                    {weatherNight?.icon.includes("+")? (
                                    <span>
                                        {
                                            weatherNight?.icon.slice(0, weatherNight?.icon.indexOf("+") + 1)
                                        }
                                        <br />
                                        {
                                            weatherNight?.icon.slice(weatherNight?.icon.indexOf("+") + 1, weatherNight?.icon.length)
                                        }
                                    </span>) : weatherNight?.icon 
                                    } 
                                    {(weatherNight?.icon == "ممطر" || weatherNight?.icon == "مطر رعدي") ? <span className='rain-percentage'>%{weatherNight?.rainPercentage}</span> : null } 
                                    <br /> 
                                     {(weatherNight?.icon == "ممطر" || weatherNight?.icon == "مطر رعدي") ? <span className='raining-weight'>{weatherNight?.rainingWeight
                                    }</span> : "" }
                                </p>
                            </div>

                            <div>
                                <p className='city-temp'>
                                    <img src={temperatureIcon} className='temperatureIcon' alt='' />
                                    <span>
                                    {weatherNight?.minTemp} 
                                    <span style={{color: "#FDD807", marginLeft: "5px"}}><sup>o</sup>c</span></span>
                                </p>
                            </div>

                            <div>
                                <p className='city-wind'>
                                <img src={windIcon} className="wind-icon" alt='' />
                                <span>
                                    {weatherNight?.wind}
                                </span>
                                <span style={{color: "#FDD807", marginLeft: "5px"}}>km/h</span>
                                </p>
                            </div>
                        </div>
                        <div className='divider '></div>
                        {/* day */}
                        <div className='sigle-period-container'>
                            <div className='period-name'>
                                <p>نهــاراً</p>
                            </div>

                            <div>
                                <img className='weather-icons' src={weatherIcons[weatherDay?.icon]} alt='icon' />
                            </div>

                            <div className='Phenomena-name-container' 
                               >
                                <p className='Phenomena-name' 
                                style={{
                                    lineHeight: weatherDay?.icon == "ممطر"&& 1,
                                    fontSize: (weatherDay?.icon == "ممطر" || weatherDay?.icon == "مطر رعدي" || weatherDay?.icon == "شبورة صباحاً + غائم جزئي" || weatherDay?.icon == "شبورة صباحاً + مشمس") ? "2rem" : "2.5rem"
                                }}>
                                     {weatherDay?.icon.includes("+")? (
                                    <span>
                                        +
                                        {
                                            weatherDay?.icon.slice(0, weatherDay?.icon.indexOf("+")-1)
                                        }
                                        <br />
                                        {
                                            weatherDay?.icon.slice(weatherDay?.icon.indexOf("+") + 1, weatherDay?.icon.length)
                                        }
                                    </span>) : weatherDay?.icon 
                                    }  
                                    {(weatherDay?.icon == "ممطر" || weatherDay?.icon == "مطر رعدي") ? <span className='rain-percentage'>
                                        %{weatherDay?.rainPercentage}
                                        </span> : null } 
                                    <br /> 
                                    {(weatherDay?.icon == "ممطر" || weatherDay?.icon == "مطر رعدي") ? <span className='raining-weight'>{weatherDay?.rainingWeight
                                    }</span> : <span> </span> }
                                </p>
                            </div>

                            <div>
                                <p className='city-temp'>
                                    <img src={temperatureIcon} className='temperatureIcon' alt='' />
                                    <span>
                                    {weatherDay?.maxTemp} 
                                    <span style={{color: "#FDD807", marginLeft: "5px"}}><sup>o</sup>c</span>
                                    
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className='city-wind'>
                                    <img src={windIcon} className="wind-icon" alt='' />
                                    <span>
                                        {weatherDay?.wind}
                                    </span>
                                    <span style={{color: "#FDD807", marginLeft: "5px"}}> km/h</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {
                        weatherDay.notes? (
                            <div className='note mx-1 mx-lg-4 mb-3 h-25'>
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