import React from 'react'
import './styles.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import doc1 from '../../images/docs/doc1.jpeg'
// import egyptMap from '../../images/egypt-map.jpg'
import egyptMap from '../../images/Egypt_map_2.png'
// import doc2 from '../../images/docs/doc2.jpeg'
// import doc3 from '../../images/docs/doc3.jpeg'


//weather-icons
import cloudyIcon from '../../images/weather-icons/cloudy.png'
import pCloudyIcon from '../../images/weather-icons/p-cloudy.png'
import rainyIcon from '../../images/weather-icons/rainy.png'
import sunnyIcon from '../../images/weather-icons/sunny.png'
import thundercon from '../../images/weather-icons/thunder.png'
import thunerRainIcon from '../../images/weather-icons/thuner-rain.png'


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
    // {type: 'img', src: doc1, alt: 'doc1'},
    {type: 'text', content: 'llllll'},
    {type: 'map', sorce: egyptMap},
    // {src: doc2, alt: 'doc2'},
    // {src: doc3, alt: 'doc3'},
  ]
  return (
    <div className='docComponent-container'>
        <Slider {...settings}>
          {
            docs.map((doc, index)=>
            <div className='outer-doc-container'>
             {
                doc.type === 'img'? (
                  <img src={doc.src} alt={doc.alt} />
                ) : doc.type === 'text'? (
                  <div className=''>
                    {
                      doc.content
                    }
                  </div>
                ): doc.type === 'map' ? (
                  <div className='egy-map-container mx-auto'>
                    <img src={doc.sorce} alt="map" />
                    <div className='region region-one'>
                      cairo
                    </div>
                    <div className='region region-two'>
                      NW
                    </div>
                    <div className='region region-three'>
                      NE
                    </div>
                    <div className='region region-four'>
                      Sinaa
                    </div>
                    <div className='region region-five'>
                      said n
                    </div>
                    <div className='region region-six'>
                      said s
                    </div>

                    <div className='side-bar-icon'>
                      <img src={cloudyIcon}  alt='icon' width='10' height='10'  draggable="true" />
                      <img src={pCloudyIcon}  alt='icon' width='10' height='10' draggable={true} />
                      <img src={rainyIcon}  alt='icon' width='10' height='10' />
                      <img src={sunnyIcon}  alt='icon' width='10' height='10' />
                      <img src={thundercon}  alt='icon' width='10' height='10' />
                      <img src={thunerRainIcon}  alt='icon' width='10' height='10' />
                    </div>
                  </div>
                ):null
              }
            </div>
            )
          }
        </Slider>
      </div>
  )
}

export default DocCompnent