import React, { useRef } from 'react'
import './styles.css'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
import sunny from '../../images/weather-icons/sunny.png'


import nextIcon from '../../images/arrow-icons/left-circle.svg';
import prevtIcon from '../../images/arrow-icons/right-circle.svg';


const DocCompnent = () => {
  let slider = useRef()
  const next = () => {
    slider.slickNext();
  }
  const previous = () => {
    slider.slickPrev();
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const docs = [
    {type: 'text', content: {
      title: 'متابعة حالة عدم الإستقرار',
      subtitle: 'الإثنين 24 اكنوبر 2022',
      points: [
        ' استمرار تكاثر السحب المنخفضة والمتوسطة الرعدية على السواحل الشمالية',
        'نشاط للرياح على الغرب يثير الرمال والأتربة',
        'انخفاض الحرارة ليلاً',
      ]
    }},
    {type: 'map', 
    sorce: egyptMap, 
    regionsWeatherState: {
      cairo: {icon: "rainyIcon", maxTemp: 29, minTemp: 19},
      delta: {icon: "thundercon", maxTemp: 29, minTemp: 19},
      nw: {icon: "thunerRainIcon", maxTemp: 26, minTemp: 19},
      ne: {icon: "thunerRainIcon", maxTemp: 27, minTemp: 20},
      sinaa: {icon: "pCloudyIcon", maxTemp: 32, minTemp: 22},
      redSea: {icon: "pCloudyIcon", maxTemp: 34, minTemp: 23},
      northSa3aid: {icon: "pCloudyIcon", maxTemp: 30, minTemp: 18},
      southSa3aid: {icon: "sunny", maxTemp: 35, minTemp: 23},
    },
    content: {
      title: 'متابعة حالة عدم الإستقرار',
      subtitle: 'الإثنين 24 اكنوبر 2022',
      points: [
        ' استمرار تكاثر السحب المنخفضة والمتوسطة الرعدية على السواحل الشمالية',
        'نشاط للرياح على الغرب يثير الرمال والأتربة',
        'انخفاض الحرارة ليلاً',
      ]
    }
  },
    
  ]

  const getIcon = (iconName) =>{
    switch (iconName) {
      case "cloudyIcon":
        return cloudyIcon
      case "pCloudyIcon":
        return pCloudyIcon
      case "rainyIcon":
        return rainyIcon
      case "sunnyIcon":
        return sunnyIcon
      case "thundercon":
        return thundercon
      case "thunerRainIcon":
        return thunerRainIcon
      case "sunny":
        return sunny
    
      default:
        break;
    }
  }


  const drowtempAndIcon = (region)=>{
    return(
      <div className='region-weather custom-tooltip'>
        <img src={getIcon(region.icon)} alt='icon' />
        <div className='region-temp'>
          <span className='maxTemp' >
            {region.maxTemp}<sup>o</sup>c
          </span>
          <span className='divider'></span>
          <span className='minTemp'>
            {region.minTemp}<sup>o</sup>c
            </span>
        </div>
        <span class="tooltiptext">
        لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة 
        </span>
      </div>
    )
  }

  // const constantVariable = doc.regionsWeatherState
  return (
    <div className='docComponent-container'>
        <Slider ref={c => (slider = c)} {...settings}>
          {
            docs.map((doc, index)=>
            <div className='outer-doc-container'>
             {
                doc.type === 'img'? (
                  <img src={doc.src} alt={doc.alt} />
                ) : doc.type === 'text'? (
                  <div className='doc-text-overlay'>
                    <div className='header'>
                      <p className='title'>
                        {doc.content.title}
                      </p>
                      <p className='sub-title'>
                        {doc.content.subtitle}
                      </p>
                    </div>
                    <ul className='doc-text-body'>
                      {
                        doc.content.points.map((state, index)=>
                        <li>
                          <p key={index} className={`state animate-${index} ${state.state === 'hint' && "hint"}`}>
                            {state}
                          </p>
                        </li>
                        )
                      }
                    </ul>
                  </div>
                ): doc.type === 'map' ? (
                  <div className='d-flex justify-content-between h-100'>
                    <div className='egy-map-container mx-auto'>
                      <img src={doc.sorce} alt="map" />
                      <div className='region region-one'>
                        {drowtempAndIcon(doc.regionsWeatherState.cairo)}
                      </div>
                      <div className='region region-two'>
                      {drowtempAndIcon(doc.regionsWeatherState.nw)}
                      </div>
                      <div className='region region-three'>
                      {drowtempAndIcon(doc.regionsWeatherState.ne)}
                      </div>
                      <div className='region region-four'>
                      {drowtempAndIcon(doc.regionsWeatherState.sinaa)}
                      </div>
                      <div className='region region-five'>
                      {drowtempAndIcon(doc.regionsWeatherState.northSa3aid)}
                      </div>
                      <div className='region region-six'>
                      {drowtempAndIcon(doc.regionsWeatherState.southSa3aid)}
                      </div>

                      {/* <div className='side-bar-icon'>
                        <img src={cloudyIcon}  alt='icon' width='10' height='10'  draggable="true" />
                        <img src={pCloudyIcon}  alt='icon' width='10' height='10' draggable={true} />
                        <img src={rainyIcon}  alt='icon' width='10' height='10' />
                        <img src={sunnyIcon}  alt='icon' width='10' height='10' />
                        <img src={thundercon}  alt='icon' width='10' height='10' />
                        <img src={thunerRainIcon}  alt='icon' width='10' height='10' />
                      </div> */}
                    </div>
                  </div>
                ):null
              }
            </div>
            )
          }
        </Slider>

        <div className='arrow-controller' >
          <img src={prevtIcon} alt='prevtIcon' width='75' height='75' onClick={next} />
          {/* <div className='' style={{width: '50px', height: '7px', background: '#000'}}></div> */}
          <div className='' style={{height: '90px', width: '7px', background: '#000'}}></div>
          <img src={nextIcon} alt='nextIcon' width='75' height='75' onClick={previous} />
        </div>
      </div>
  )
}

export default DocCompnent