import React from 'react'
import temperatureIcon  from '../../images/cities/temperature_icon.png';


const MainInfoItem = ({weatherData, date}) => {
  return (
    <div className='InfoItem-container h-100'>
        <div className='card h-100 pt-4'>
            <div className=''>
                <div className='date-container mb-5'>
                    <p className='day'>
                        {date}
                    </p>
                </div>
                <div className='icon-container periods-container d-flex align-items-center justify-content-between px-3 row'>
                    {/* night */}
                    <div className='col-5 d-flex flex-column align-items-center'>
                        <div className='period-name'>
                            <p>ليــلاً</p>
                        </div>
                        <img src={weatherData.icon} alt='icon' />
                        <p>شبورة مائية</p>
                        <p className='city-temp'>
                            <img src={temperatureIcon} alt='' />
                            <sapn>
                            18 <sup>o</sup>c
                            </sapn>
                        </p>
                        <p>
                            25 km/h
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
                        <img src={weatherData.icon} alt='icon' />
                        <p>غائم جزئي</p>
                        <p className='city-temp'>
                            <img src={temperatureIcon} alt='' />
                            <span>
                            29 <sup>o</sup>c

                            </span>
                        </p>
                        <p>
                            20 km/h
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className=''>
                <div className='row d-flex justify-content-between'>
                    <div className='min-temp col-5'>
                        <span>عظمى</span>
                        <span>
                            {weatherData.maxTemp} <sup>o</sup>c
                        </span>
                    </div>
                    <div className='max-temp col-5'>
                        <span>صغرى</span>
                        <span>
                        {weatherData.minTemp} <sup>o</sup>c
                        </span>
                    </div>

                </div>
            </div> */}
        </div>
    </div>
  )
}

export default MainInfoItem