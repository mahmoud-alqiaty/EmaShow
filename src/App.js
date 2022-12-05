import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './screens/Home/Home';

export const AllDataContext = createContext()


function App() {

  const [allData, setAllData] = useState({})
  const [showSidebar, setShowSidebar] = useState(true)

  
  useEffect(() => {
    const getallData = async () =>{
      // axios.get("https://ema-show-backend.onrender.com/mapsAndSats/maps/635259f5f3b78e569fbbeb62")
      axios.get("https://web-production-474c.up.railway.app/mapsAndSats/maps/635259f5f3b78e569fbbeb62")
      .then(res=>{
        console.log("res: ", res.data);
        setAllData(res.data)
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

    getallData()
  }, [])


  return (
    <AllDataContext.Provider value={{...allData, showSidebar, setShowSidebar}}>
      <div className="App">
      <Header />
      <Home />
      </div>
    </AllDataContext.Provider>
  );
}

export default App;
