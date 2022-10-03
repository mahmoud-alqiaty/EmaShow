import React from 'react'
import './styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import cairo from '../../images/cities/cairo-pyramidTwo.jpg'
import alex from '../../images/cities/alexTwo.jpg'
import sinaa from '../../images/cities/sinai.jpg'
import Asyte from '../../images/cities/Asyte.jpg'
import luxor from '../../images/cities/luxorOne.jpg'
import MainInfoItem from './InfoItem';
import SecInfoItem from './SecInfoItem';

//weather-icons
import cloudyIcon from '../../images/weather-icons/cloudy.png'
import pCloudyIcon from '../../images/weather-icons/p-cloudy.png'
import rainyIcon from '../../images/weather-icons/rainy.png'
import sunnyIcon from '../../images/weather-icons/sunny.png'
import thundercon from '../../images/weather-icons/thunder.png'
import thunerRainIcon from '../../images/weather-icons/thuner-rain.png'


const CityComponent = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
    
      const cities = [
        {
          src: cairo, 
          alt: 'cairo', 
          name: 'القاهرة الكبرى والوجه البحري', 
          weatherData: [
            {
              icon: sunnyIcon,
              maxTemp: 33,
              minTemp: 21
            },
            {
              icon: pCloudyIcon,
              maxTemp: 32,
              minTemp: 22
            },
            {
              icon: sunnyIcon,
              maxTemp: 31,
              minTemp: 21
            },
            {
              icon: cloudyIcon,
              maxTemp: 30,
              minTemp: 20
            },

          ]
        },
        {src: alex, 
          alt: 'alex', 
          name: 'السواحل الشمالية',
          weatherData: [
            {
              icon: cloudyIcon,
              maxTemp: 30,
              minTemp: 21
            },
            {
              icon: pCloudyIcon,
              maxTemp: 29,
              minTemp: 19
            },
            {
              icon: sunnyIcon,
              maxTemp: 30,
              minTemp: 21
            },
            {
              icon: thundercon,
              maxTemp: 29,
              minTemp: 20
            },

          ]
        },
        {
          src: sinaa, 
          alt: 'sinaa', 
          name: 'جنوب سيناء وسلاسل جبال البحر الأحمر',
          weatherData: [
            {
              icon: thundercon,
              maxTemp: 36,
              minTemp: 25
            },
            {
              icon: sunnyIcon,
              maxTemp: 35,
              minTemp: 26
            },
            {
              icon: sunnyIcon,
              maxTemp: 35,
              minTemp: 24
            },
            {
              icon: thundercon,
              maxTemp: 34,
              minTemp: 25
            },

          ]
        },
        {
          src: Asyte, 
          alt: 'Asyte', 
          name: "شمال الصعيد",
          weatherData: [
            {
              icon: pCloudyIcon,
              maxTemp: 33,
              minTemp: 19
            },
            {
              icon: sunnyIcon,
              maxTemp: 34,
              minTemp: 22
            },
            {
              icon: thunerRainIcon,
              maxTemp: 31,
              minTemp: 18
            },
            {
              icon: thundercon,
              maxTemp: 30,
              minTemp: 19
            },

          ]
        },
        {src: luxor, 
          alt: 'luxor', 
          name: "جنوب الصعيد",
          weatherData: [
            {
              icon: thunerRainIcon,
              maxTemp: 40,
              minTemp: 25,
            },
            {
              icon: sunnyIcon,
              maxTemp: 39,
              minTemp: 21,
            },
            {
              icon: rainyIcon,
              maxTemp: 38,
              minTemp: 24,
            },
            {
              icon: thundercon,
              maxTemp: 37,
              minTemp: 25,
            },

          ]
        },
      ]
      
      const dates = [
        'الإثنين 3 اكتوبر 2022',
        'الثلاثاء 4 اكتوبر 2022',
        'الأربعاء 5 اكتوبر 2022',
        'الخميس 6 اكتوبر 2022',
        
      ]
  return (
    <div className='mapComponent-container'>
        <Slider {...settings}>
          {
            cities.map(({src, alt, name, weatherData}, index)=><div className='img-container' key={index}>
              <img src={src} alt={alt} />
              <div className='info-container'>
                <div className='row city-name-container'>
                  <div className='city-name col-12'>
                    {name}
                  </div>
                </div>
                <div className='row items'>
                  <div className='item1 col-8'>
                      <MainInfoItem weatherData={weatherData[0]} date={dates[0]} />
                  </div>
                  <div className='item2 col-4 d-flex flex-column justify-content-between align-items-center'>
                      <SecInfoItem weatherData={weatherData[1]} date={dates[1]}  />
                      <SecInfoItem weatherData={weatherData[2]} date={dates[2]} />
                      <SecInfoItem weatherData={weatherData[3]} date={dates[3]} />
                  </div>
                </div>
              </div>
            </div>)
          }
        </Slider>
    </div>
  )
}

export default CityComponent