import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './screens/Home/Home';
import swal from 'sweetalert';


export const AllDataContext = createContext()


function App() {

  let commoing_data = 
  {
    "spacCasePage": {
      "mainTitle": "متابعة الحالة الجوية",
      "subTitle": "الثلاثاء 09 ابريل 2024",
      "StartingDay": 0,
      "allSpcWeatherPoints": [
        "انخفاض  في درجات الحرارة",
        "نشاط الرياح على أغلب الأنحاء",
        "أمطار تصل لمتوسطة ورعدية"
      ],
      "allSpcWarningPoints": [
        "متابعة النشرات",
        "القيادة بهدوء على الطرق أثناء تساقط الأمطار"
      ],
      "spcMaps": [
        "https://res.cloudinary.com/dryhuprvx/image/upload/v1716886818/kcoyrtxb0vbpg6ouirze.jpg",
        "https://res.cloudinary.com/dryhuprvx/image/upload/v1716886879/zjp2q9w9y8vxehonx6vo.jpg",
        "https://res.cloudinary.com/dryhuprvx/image/upload/v1716886921/qbukgctf9dyiakdkv3xv.jpg",
        "https://res.cloudinary.com/dryhuprvx/image/upload/v1716886959/m6pgafoorirwqjx7fypv.jpg"
        
      ]
    },
    "_id": "635259f5f3b78e569fbbeb62",
    "generalWeatherState": [],
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
            "icon": 'نشاط رياح + غائم جزئي',
            "maxTemp": 30,
            "minTemp": 20,
            "wind": 25,
            "date": "الأربعاء 29 مايو 2024",
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
            "icon": "مشمس",
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
        "name": "السواحل الشمالية الغربية وشمال الوجه البحري",
        "weatherData": [
          {
            "ms": {
              "windStart": 20,
              "windEnd": 30,
              "windDirection": 300,
              "waveStart": "1",
              "waveEnd": "1.75"
            },
            "rs": {
              "windStart": 0,
              "windEnd": 0,
              "windDirection": 0,
              "waveStart": "1.5",
              "waveEnd": "2.5"
            },
            "icon": 'نشاط رياح + غائم جزئي',
            "maxTemp": 25,
            "minTemp": 18,
            "wind": 26,
             "date": "الثلاثاء 30 ابريل 2024",
            "rainPercentage": "0",
            "notes": "طقس مائل للبرودة فى الصباح الباكر، معتدل الحرارة نهاراً،\nمائل للبرودة أول الليل بارد فى اخر، وفرص أمطار خفيفة",
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
             "icon": 'نشاط رياح + غائم جزئي',
            "maxTemp": 27,
            "minTemp": 20,
            "wind": 26,
             "date": "الثلاثاء 30 ابريل 2024",
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
              "windStart": 30,
              "windEnd": 40,
              "windDirection": 300,
              "waveStart": "1.5",
              "waveEnd": "2"
            },
             "icon": "مشمس",
            "maxTemp": 39,
            "minTemp": 27,
            "wind": 26,
            "date": "الثلاثاء 30 ابريل 2024",
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
             "icon": 'نشاط رياح + مشمس',
            "maxTemp": 34,
            "minTemp": 20,
            "wind": 26,
             "date": "الثلاثاء 30 ابريل 2024",
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
             "icon": 'نشاط رياح + مشمس',
            "maxTemp": 45,
            "minTemp": 27,
            "wind": 26,
             "date": "الثلاثاء 30 ابريل 2024",
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

  // const [allData, setAllData] = useState({...commoing_data})
  const [allData, setAllData] = useState({})
  const [showSidebar, setShowSidebar] = useState(true)
  const [loadingDataAPI, setloadingDataAPI] = useState(true)

  useEffect(() => {
    const getallData = async () =>{
      const headers = {
        Accept: 'application/json',
      }
      axios.get("https://212.103.189.111:8090/getdata", {
        headers,
        auth: {
          username: "abdou",
          password: "abdou"
        }
      })
      .then(res=>{
        console.log("res.data: ", res.data);
        setAllData(res.data)
        swal("تم استقبال البيانات بنجاح", "", "success");
        setloadingDataAPI(false)

      })
      .catch(err=>{        
        console.log(err.message);
        swal("فشل استقبال البيانات", "", "error");
        setloadingDataAPI(false)
      })

    }

    getallData()
  }, [])

  return (
    <AllDataContext.Provider value={{...allData, showSidebar, setShowSidebar}}>
      <div className="App">
        {/*{
          allData? allData.data : "no"
        }*/}
      <Header />
      <Home loadingDataAPI={loadingDataAPI} />
      </div>
    </AllDataContext.Provider>
  );
}

export default App;
