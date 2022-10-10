import React from 'react'
import './styles.css'
import bg from '../../images/emaOne.jpg'


const Homecpmponent = () => {
  const weatherState = [
    {
      state: 'normal',
      text: 'مائل للحرارة على السواحل الشمالية'
    },
    {
      state: 'normal',
      text: 'حار على باقي الأنحاء'
    },
    {
      state: 'normal',
      text: 'مائل للبرودة أخر الليل والصباح الباكر على شمال البلاد',
    },
    {
      state: 'hint',
      text: 'اعتباراً من السبت حالة عدم استقرار في الأحوال الجوية على شمال البلاد حتى القاهرة',
    }
    
  ]
  return (
    <div className='bg'>
      <img src={bg} alt='bg' />
      <div className='overlay'>
        {/* <p className='head'>حالة الطقس المتوقعة</p> */}
        <p className='head'>السمات الرئيسية لحالة الطقس</p>
        <ul>
          {
            weatherState.map((state, index)=>
            <li>
              <p key={index} className={`state animate-${index} ${state.state === 'hint' && "hint"}`}>
                {state.text}
              </p>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Homecpmponent