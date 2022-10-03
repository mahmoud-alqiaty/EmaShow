import React from 'react'

const MainInfoItem = ({weatherData, date}) => {
  return (
    <div className='InfoItem-container h-100'>
        <div className='card'>
            <div className=''>
                <div className='row'>
                    <div className='date-container col-8'>
                        <p className='day'>
                            {date}
                        </p>
                    </div>
                    <div className='icon-container col-4'>
                        <img src={weatherData.icon} alt='icon' />
                    </div>
                </div>
            </div>
            <div className=''>
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
            </div>
        </div>
    </div>
  )
}

export default MainInfoItem