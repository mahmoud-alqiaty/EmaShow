import React from 'react'
import './styles.css';
import logo from '../../images/logo2.png'

function Header() {
  return (
    <div className='header-container' >
      {/* <div className='row w-100'>
        <div className='logo col-3'>
          <img src={logo} alt='logo' />
        </div>
        <div className='name col-6'>
          <p className='font-weight-bold'>
            مركـز الإنــذار المبكــر بمخاطــر الطقــس
          </p>
        </div>
        <div className='ema-name col-3'>
          <p>الهيئة العامة للأرصاد الجوية المصرية</p>
        </div>
      </div> */}


          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='name-container'>
            <div className='ema-name'>
              <p>الهيئــــــــة العامـــــــة للأرصـــــــاد الجويــــــــة المصريـــــــــة</p>
            </div>
            <div className='name'>
              <p className='font-weight-bold'>
                مركــز الإنــذار المبكــر بمخاطــر الطقــس
              </p>
            </div>
            
          </div>
        

    </div>
  )
}

export default Header