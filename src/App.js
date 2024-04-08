import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './screens/Home/Home';

export const AllDataContext = createContext()


function App() {

  let commoing_data = 
  {
    "spacCasePage": {
      "mainTitle": "متابعة حالة عدم الإستقرار",
      "subTitle": "الإثنين 06 فبرابر 2023",
      "StartingDay": 2,
      "allSpcWeatherPoints": [
        "انخفاض ملحوظ في درجات الحرارة",
        "نشاط الرياح على كافة الأنحاء",
        "أمطار تصل لغزيرة على مناطق من السواحل الشمالية"
      ],
      "allSpcWarningPoints": [
        "متابعة النشرات",
        "القيادة بهدوء على الطرق أثناء تساقط الأمطار"
      ],
      "spcMaps": [
        "http://res.cloudinary.com/dryhuprvx/image/upload/v1693144394/g92fadfopjfhqqnebxdo.jpg",
        "http://res.cloudinary.com/dryhuprvx/image/upload/v1693144425/f6tgd3zcvdefmuffegta.jpg",
        "http://res.cloudinary.com/dryhuprvx/image/upload/v1693144462/y68qnc9laffylwyngfyp.jpg",
        "http://res.cloudinary.com/dryhuprvx/image/upload/v1693144484/yw4wdkjizi5hu3rmqppn.jpg"
        
      ]
    },
    "_id": "635259f5f3b78e569fbbeb62",
    "generalWeatherState": [
      "استقرار في الأحوال الجوية",
      "شبورة مائية صباحا",
      "نشاط رياح أحياناً على مناطق متفرقة"
    ],
    "mapsArray": [],
    "regionsTempPage": [
      {
        "name": "القاهرة وجنوب الوجه البحري ومدن القناة",
        "weatherData": [
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 31,
            "minTemp": 21,
            "wind": 25,
            "date": "الإثنين 17 يوليو 2023",
            "notes": "",
            "_id": "6364162fee90783cda08aba3"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 0,
            "minTemp": 21,
            "wind": 26,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "20",
            "notes": "",
            "rainingWeight": "خفيف",
            "_id": "6364162fee90783cda08aba0"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "نشاط رياح + مشمس",
            "maxTemp": 38,
            "minTemp": 27,
            "wind": 23,
            "date": "الثلاثاء 18 يوليو 2023",
            "_id": "6364162fee90783cda08aba3"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 24,
            "minTemp": 15,
            "wind": 23,
            "date": "الأربعاء 19 يوليو 2023",
            "_id": "6364162fee90783cda08aba3"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "شبورة صباحاً + غائم جزئي",
            "maxTemp": 24,
            "minTemp": 15,
            "wind": 23,
            "date": "الخميس 20 يوليو 2023",
            "_id": "6364162fee90783cda08aba3"
          }
        ],
        "_id": "6364162fee90783cda08ab9e"
      },
      {
        "name": "السواحل الشمالية الغر بية وشمال الوجه البحري",
        "weatherData": [
          {
            "ms": {
              "windStart": 30,
              "windEnd": 35,
              "windDirection": 135,
              "waveStart": "1.5",
              "waveEnd": "2"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "نشاط رياح + غائم جزئي",
            "maxTemp": 0,
            "minTemp": 19,
            "wind": 26,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "40",
            "notes": "طقس مائل للبرودة فى الصباح الباكر، معتدل الحرارة نهاراً،\nمائل للبرودة أول الليل بارد فى اخر، وفرص أمطار خفيفة",
            "rainingWeight": "خفيف",
            "_id": "6364162fee90783cda08aba9"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 0,
            "minTemp": 19,
            "wind": 28,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "40",
            "notes": "",
            "rainingWeight": "خفيف",
            "_id": "6364162fee90783cda08aba6"
          },
          {
            "ms": {
              "windStart": 30,
              "windEnd": 35,
              "windDirection": 135,
              "waveStart": "1.5",
              "waveEnd": "2"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 33,
            "minTemp": 24,
            "wind": 26,
            "date": "الثلاثاء 18 يوليو 2023",
            "rainPercentage": "40",
            "_id": "6364162fee90783cda08aba9"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": null,
              "waveStart": "1.5",
              "waveEnd": "1"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "أمطار",
            "maxTemp": 23,
            "minTemp": 14,
            "wind": 26,
            "date": "الأربعاء 19 يوليو 2023",
            "rainPercentage": "30",
            "_id": "6364162fee90783cda08aba9"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": null,
              "waveStart": "1.5",
              "waveEnd": "1"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "شبورة صباحاً + غائم جزئي",
            "maxTemp": 24,
            "minTemp": 14,
            "wind": 26,
            "date": "الخميس 20 يوليو 2023",
            "rainPercentage": "30",
            "_id": "6364162fee90783cda08aba9"
          }
        ],
        "_id": "6364162fee90783cda08aba4"
      },
      {
        "name": "السواحل الشمالية الشرقية ووسط سيناء",
        "weatherData": [
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 20,
              "windEnd": 30,
              "windDirection": 135,
              "waveStart": "2",
              "waveEnd": "3"
            },
            "icon": "غائم جزئي",
            "maxTemp": 27,
            "minTemp": 10,
            "wind": 13,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "40",
            "notes": "طقس مائل للبرودة فى الصباح الباكر، معتدل الحرارة نهاراً،\nمائل للبرودة أول الليل بارد فى اخره\n\n ",
            "_id": "6364162fee90783cda08abaf"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 0,
            "minTemp": 10,
            "wind": 19,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "20",
            "notes": "",
            "rainingWeight": "خفيف",
            "_id": "6364162fee90783cda08abac"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 20,
              "windEnd": 30,
              "windDirection": 135,
              "waveStart": "1",
              "waveEnd": "1.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 35,
            "minTemp": 25,
            "wind": 26,
            "date": "الثلاثاء 18 يوليو 2023",
            "rainPercentage": "30",
            "_id": "6364162fee90783cda08abaf"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": null,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "أمطار",
            "maxTemp": 25,
            "minTemp": 14,
            "wind": 26,
            "date": "الأربعاء 19 يوليو 2023",
            "rainPercentage": "30",
            "_id": "6364162fee90783cda08abaf"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": null,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "شبورة صباحاً + غائم جزئي",
            "maxTemp": 23,
            "minTemp": 14,
            "wind": 26,
            "date": "الخميس 20 يوليو 2023",
            "rainPercentage": "40",
            "_id": "6364162fee90783cda08abaf"
          }
        ],
        "_id": "6364162fee90783cda08abaa"
      },
      {
        "name": "جنوب سيناء وسلاسل جبال البحر الأحمر",
        "weatherData": [
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "نشاط رياح + غائم جزئي",
            "maxTemp": 23,
            "minTemp": 13,
            "wind": 19,
            "date": "الإثنين 17 يوليو 2023",
            "notes": "طقس حـــار نهاراً، لطيف ليلاً وفي الصباح البــاكر",
            "_id": "6364162fee90783cda08abb5"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 0,
            "minTemp": 13,
            "wind": 21,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "40",
            "notes": "",
            "rainingWeight": "خفيف",
            "_id": "6364162fee90783cda08abb2"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "نشاط رياح + مشمس",
            "maxTemp": 42,
            "minTemp": 30,
            "wind": 30,
            "date": "الثلاثاء 18 يوليو 2023",
            "rainPercentage": "30",
            "_id": "6364162fee90783cda08abb5"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 26,
            "minTemp": 18,
            "wind": 30,
            "date": "الأربعاء 19 يوليو 2023",
            "_id": "6364162fee90783cda08abb5"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 26,
            "minTemp": 18,
            "wind": 30,
            "date": "الخميس 20 يوليو 2023",
            "_id": "6364162fee90783cda08abb5"
          }
        ],
        "_id": "6364162fee90783cda08abb0"
      },
      {
        "name": "شمال الصعيد",
        "weatherData": [
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "شبورة صباحاً + غائم جزئي",
            "maxTemp": 18,
            "minTemp": 6,
            "wind": 19,
            "date": "الإثنين 17 يوليو 2023",
            "notes": "شبورة مائية مع طقس مائل للبرودة فى الصباح الباكر، وطقس معتدل الحرارة نهاراً،  بارد ليلاً",
            "_id": "6364162fee90783cda08abbb"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 0,
            "minTemp": 6,
            "wind": 17,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "30",
            "notes": "",
            "rainingWeight": "خفيف",
            "_id": "6364162fee90783cda08abb8"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "مشمس",
            "maxTemp": 41,
            "minTemp": 27,
            "wind": 23,
            "date": "الثلاثاء 18 يوليو 2023",
            "_id": "6364162fee90783cda08abbb"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "غائم جزئي",
            "maxTemp": 26,
            "minTemp": 9,
            "wind": 23,
            "date": "الأربعاء 19 يوليو 2023",
            "_id": "6364162fee90783cda08abbb"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "شبورة صباحاً + غائم جزئي",
            "maxTemp": 25,
            "minTemp": 9,
            "wind": 23,
            "date": "الخميس 20 يوليو 2023",
            "_id": "6364162fee90783cda08abbb"
          }
        ],
        "_id": "6364162fee90783cda08abb6"
      },
      {
        "name": "جنوب الصعيد",
        "weatherData": [
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "أمطار",
            "maxTemp": 23,
            "minTemp": 9,
            "wind": 17,
            "date": "الإثنين 17 يوليو 2023",
            "rainPercentage": "20",
            "notes": "طقس مائل للبرودة فى الصباح الباكر، حـــار نهاراً،\nمائل للبرودة أول الليل بارد فى اخره",
            "_id": "6364162fee90783cda08abc1"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "صافي",
            "maxTemp": 0,
            "minTemp": 9,
            "wind": 19,
            "date": "الإثنين 17 يوليو 2023",
            "notes": "",
            "_id": "6364162fee90783cda08abbe"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "نشاط رياح + مشمس",
            "maxTemp": 44,
            "minTemp": 30,
            "wind": 21,
            "date": "الثلاثاء 18 يوليو 2023",
            "rainPercentage": "20",
            "_id": "6364162fee90783cda08abc1"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "مشمس",
            "maxTemp": 28,
            "minTemp": 12,
            "wind": 21,
            "date": "الأربعاء 19 يوليو 2023",
            "_id": "6364162fee90783cda08abc1"
          },
          {
            "ms": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": "مشمس",
            "maxTemp": 28,
            "minTemp": 12,
            "wind": 21,
            "date": "الخميس 20 يوليو 2023",
            "_id": "6364162fee90783cda08abc1"
          }
        ],
        "_id": "6364162fee90783cda08abbc"
      }
    ],
    "__v": 0
  }

// console.log("commoing_data: ", commoing_data);
  // const [allData, setAllData] = useState({...commoing_data})
  const [allData, setAllData] = useState({})
  const [showSidebar, setShowSidebar] = useState(true)

  useEffect(() => {
    const getallData = async () =>{
      const headers = {
                      Accept: 'application/json',
                      'Access-Control-Allow-Origin': 'https://ema-show-new.on.fleek.co/',
                       }
      // axios.get("http://192.168.60.17:8090/getdata")
      axios.get("http://212.103.189.111:8090/getdata",{headers})
      // axios.get("https://web-production-9b2e.up.railway.app/mapsAndSats/maps/635259f5f3b78e569fbbeb62")
      .then(res=>{
        console.log("res: ", res);
        setAllData(res.data)
      })
      .catch(err=>{        
        console.log(err.message);
      })

      // fetch('http://192.168.60.17:8080/getdata', {
      //   mode: "no-cors",
      //   method: "GET",
      //   headers: {
      //     "Accept": "application/json"
      //   }
      // }).then((response) => {
      //   console.log("response: ", response); // null
       
      // })
      // .catch(error => { console.log('request failed', error); });



      // fetch('http://192.168.60.17:8080/getdata', {
      //     mode: "no-cors",
      //     method: "GET",
      //     headers: {
      //       "Accept": "application/json"
      //     }
      //   })
      //   .then(response => response.text())
      //   .then((response) => {
      //     console.log("response: ", response); // returns empty string
         
      //   })
      //   .catch(error => { console.log('request failed', error); });


      // fetch('http://192.168.60.17:8080/getdata', {
      //     // mode: 'no-cors',
      //     method: 'GET',
      //     // headers: {
      //     //   Accept: 'application/json',
      //     //   // 'Access-Control-Allow-Origin': '*',
      //     // },
      //   },
      //   ).then(response => {
      //     if (response.ok) {
      //       response.json().then(json => {
      //         console.log(json);
      //       });
      //     }
      //   });


      // fetch('http://192.168.60.17:8080/getdata', {
      //       // mode: 'no-cors',
      //       method: 'GET',
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //         'Access-Control-Allow-Origin': '*',
      //       },
      //     },)
      //   .then((response) => {
      //       return response.json();
      //   })
      //   .then((myJson) => {
      //       this.setState({
      //         isLoaded: true,
      //         posts: myJson,
      //       });
      //       console.log(myJson);
      //   });
    }

    getallData()
  }, [])

  return (
    <AllDataContext.Provider value={{...allData, showSidebar, setShowSidebar}}>
      <div className="App">
        {
          allData? allData.data : "no"
        }
      <Header />
      <Home />
      </div>
    </AllDataContext.Provider>
  );
}

export default App;
