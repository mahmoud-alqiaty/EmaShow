import React from 'react'
import icon from '../../images/weather-icons/sunny.png'

const MainInfoItem = () => {
  return (
    <div className='InfoItem-container h-100'>
        <div className='card'>
            <div className=''>
                <div className='row'>
                    <div className='date-container col-8'>
                            <p className='day'>الإثنين</p>
                            <p>3 اكتوبر 2022</p>
                    </div>
                    <div className='icon-container col-4'>
                        <img src={icon} alt='icon' />
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='row d-flex justify-content-between'>
                    <div className='min-temp col-5'>
                        <span>عظمى</span>
                        <span>35</span>
                    </div>
                    <div className='max-temp col-5'>
                        <span>صغرى</span>
                        <span>20</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default MainInfoItem