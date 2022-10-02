import React from 'react'
import icon from '../../images/weather-icons/Group 45.png'
import './styles2.css'
const SecInfoItem = () => {
    return (
      <div className='InfoItem-container2'>
          <div className='date-container2 row'>
              <p className='col-12 day'>الثلاثاء 4 اكتوبر 2022</p>
          </div>
              
          <div className='card-footer row'>
            <div className='temp col-6'>
                <p>20 - 36</p>
            </div>
            <div className='icon-container col-6'>
                <img src={icon} alt='icon2' />
            </div>
          </div>
      </div>
    )
  }

  export default SecInfoItem