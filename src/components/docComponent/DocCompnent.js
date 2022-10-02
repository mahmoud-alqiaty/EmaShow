import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import doc1 from '../../images/docs/doc1.jpeg'
// import doc2 from '../../images/docs/doc2.jpeg'
// import doc3 from '../../images/docs/doc3.jpeg'


const DocCompnent = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const docs = [
    {src: doc1, alt: 'doc1'},
    // {src: doc2, alt: 'doc2'},
    // {src: doc3, alt: 'doc3'},
  ]
  return (
    <div className='docComponent-container'>
        <Slider {...settings}>
          {
            docs.map(({src, alt}, index)=><div className='img-container' key={index}>
              <img src={src} alt={alt} />
            </div>)
          }
        </Slider>
      </div>
  )
}

export default DocCompnent