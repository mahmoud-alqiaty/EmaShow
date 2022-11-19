
//Day-weather-icons

import sunnyIcon from '../images/weather-icons/static/day/sunny.png'
import cloudyIcon from '../images/weather-icons/static/day/cloudy.png'
import pCloudyIcon from '../images/weather-icons/static/day/SunnyWithCloud.png'
import daySunnyMist from '../images/weather-icons/static/day/day-sunny-mist.png'
import dayCloudyMist from '../images/weather-icons/static/day/day-Pcloudy-mist.png'
import rainyIcon from '../images/weather-icons/static/day/sun-cloud-rain.png'
import thundercon from '../images/weather-icons/static/day/thunder.png'
import thunerRainIcon from '../images/weather-icons/static/day/thuner-rain.png'
import dayPcloudyWindy from '../images/weather-icons/static/day/day-Pcloudy-windy.png'
import sunWindy from '../images/weather-icons/static/day/sun-windy.png'

import windIcon from '../images/weather-icons/static/wind-one.png'

import waveIcon from '../images/weather-icons/static/wave.png'
import navigationIcon from '../images/weather-icons/static/navigation.png'




// night
import nightIcon from '../images/weather-icons/static/night/night.png'
import nightCloudy from '../images/weather-icons/static/night/nightCloudy.png'
import nightClearMist from '../images/weather-icons/static/night/night-clear-mist.png'
import nightCloudyMist from '../images/weather-icons/static/night/night-cloudy-mist.png'
import nightRainyIcon from '../images/weather-icons/static/night/night-rain.png'
import nightThunder from '../images/weather-icons/static/night/thunder.png'
import nightThunerRainIcon from '../images/weather-icons/static/night/thuner-rain.png'
import nightHaze from '../images/weather-icons/static/night/haze-night.png'
import nightWindyCloudy from '../images/weather-icons/static/night/nightWindyCloudy.png'

export const weatherIcons = {
    'مشمس': sunnyIcon,
    'غائم': cloudyIcon,
    'غائم جزئي': pCloudyIcon,
    'شبورة صباحاً + غائم جزئي': dayCloudyMist,
    'شبورة صباحاً + مشمس': daySunnyMist,
    'ممطر': rainyIcon ,
    'رعدي': thundercon,
    'مطر رعدي': thunerRainIcon,
    'رمال مثارة': daySunnyMist,
    'شبورة': daySunnyMist,
    'ضباب': daySunnyMist,
    'أتربة عالقة': daySunnyMist,
    'نشاط رياح + مشمس': sunWindy,
    'نشاط رياح + غائم جزئي': dayPcloudyWindy,
    navigationIcon,
    waveIcon

}
export const nightWeatherIcons = {
    'صافي': nightIcon,
    'غائم': nightCloudy,
    'غائم جزئي': nightCloudy,
    'ممطر': nightRainyIcon ,
    'رعدي': nightThunder,
    'مطر رعدي': nightThunerRainIcon,
    'رمال مثارة': nightHaze,
    'شبورة': nightHaze,
    'ضباب': nightCloudyMist,
    'نشاط رياح + غائم جزئي': nightWindyCloudy,
}