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
        {src: cairo, alt: 'cairo', name: 'القاهرة الكبرى والوجه البحري',},
        {src: alex, alt: 'alex', name: 'السواحل الشمالية',},
        {src: sinaa, alt: 'sinaa', name: 'جنوب سيناء وسلاسل جبال البحر الأحمر',},
        {src: Asyte, alt: 'Asyte', name: "شمال الصعيد",},
        {src: luxor, alt: 'luxor', name: "جنوب الصعيد",},
      ]
  return (
    <div className='mapComponent-container'>
        <Slider {...settings}>
          {
            cities.map(({src, alt, name}, index)=><div className='img-container' key={index}>
              <img src={src} alt={alt} />
              <div className='info-container'>
                <div className='row city-name-container'>
                  <div className='city-name col-12'>
                    {name}
                  </div>
                </div>
                <div className='row items'>
                  <div className='item1 col-8'>
                      <MainInfoItem />
                  </div>
                  <div className='item2 col-4 d-flex flex-column justify-content-between align-items-center'>
                      <SecInfoItem />
                      <SecInfoItem />
                      <SecInfoItem />
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