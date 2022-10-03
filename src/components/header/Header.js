import React from 'react'
import './styles.css';
import logo from '../../images/logo2.png'

function Header() {
  return (
    <div className='header-container d-flex justify-content-between align-items-center' >
      <div className='logo'>
        <img src={logo} alt='logo'  width='270' height='270' />
        
      </div>
      <div className='name'>
        <p className='font-weight-bold'>
          مركز الإنذار المبكر بمخاطر الطقس
        </p>
      </div>
      <div className='ema-name'>
        <p>الهيئة العامة للأرصاد الجوية المصرية</p>
      </div>
    </div>
  )
}

export default Header