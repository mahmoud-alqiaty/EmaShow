import React from 'react'
import { weatherIcons } from '../../constants/weatherIcons';
import temperatureIcon  from '../../images/cities/temperature_icon.png';
import windIcon  from '../../images/weather-icons/static/wind-four.png';


const MainInfoItem = ({weatherDay, weatherNight, date, isRegionCairo}) => {
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
                        <p className='Phenomena-name' style={{lineHeight: weatherNight?.icon == "ممطر"&& 1}}>{weatherNight?.icon} {weatherNight?.icon == "ممطر" ? <span style={{fontSize: "1.8rem", color: "#ddcd6f"}}>%40</span> : null } <br /> {weatherNight?.icon == "ممطر" ? <span style={{fontSize: "1.3rem", color: "#ddcd6f"}}>(خفيف:متوسط)</span> : null }</p>
                        
                        
                        <p className='city-temp'>
                            <img src={temperatureIcon} className='temperatureIcon' alt='' />
                            <span>
                            {weatherNight?.minTemp} 
                            <span style={{color: "#ddcd6f", marginLeft: "5px"}}><sup>o</sup>c</span></span>
                        </p>
                        <p className='city-wind'>
                        {/* <img src={windIcon} alt='' /> */}
                        <span style={{fontSize: "2.4rem", marginRight: "5px"}}>
                            {weatherNight?.wind}
                        </span>
                        <span style={{color: "#ddcd6f", marginLeft: "5px", fontSize: "2.4rem"}}>km/h</span>
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
                        <p className='Phenomena-name' style={{lineHeight: weatherNight?.icon == "ممطر"&& 1}}>{weatherDay?.icon} {weatherNight?.icon == "ممطر" ? <span style={{fontSize: "1.7rem", color: "#ddcd6f"}}>%40</span> : null } <br /> {weatherNight?.icon == "ممطر" ? <span style={{fontSize: "1.3rem", color: "#ddcd6f"}}>(خفيف:متوسط)</span> : null}</p>
                        <p className='city-temp'>
                            <img src={temperatureIcon} className='temperatureIcon' alt='' />
                            <span>
                            {weatherDay?.maxTemp} 
                            <span style={{color: "#ddcd6f", marginLeft: "5px"}}><sup>o</sup>c</span>
                            
                            </span>
                        </p>
                        <p className='city-wind'>
                            {/* <img src={windIcon} alt='' /> */}
                            <span style={{fontSize: "2.4rem", marginRight: "5px"}}>
                                {weatherDay?.wind}
                            </span>
                            <span style={{color: "#ddcd6f", marginLeft: "5px", fontSize: "2.4rem"}}> km/h</span>
                        </p>
                    </div>
                </div>
                {
                    isRegionCairo? (
                        <div className='note  mx-2 mb-2' style={{textAlign: 'right'}}>
                            <span style={{color: '#fff', fontSize: "1.4rem", fontWeight:'bold' }}>أمطار خفيفة قد تكون متوسطة 40% على شمال الوجه البحري تصل خفيفة لمناطق من جنوب الوجه البحري</span>
                        </div>
                    ):null
                }
                
            </div>
        </div>
    </div>
  )
}

export default MainInfoItem