import React, { useState,useEffect } from 'react'
import './App.css'
import sunny from './asset/sunBGRemove.png'
import rain from './asset/rain.png'
import could from './asset/couldyBG.png'
import snow from './asset/snowBG.png'
const App = () => {
  const [data,setData] = useState()
  const [searchData, setSearchData] = useState()
 
//use effect to fecth api
//step 2 store data from api in state line 12 setData
//step 3 search box to show data in console -mainBox

const searchCityFunc =()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=82c0389cbf40503da8bbad129031d570`)
    .then(response => response.json())
    .then(data => {
      setData(data);
      console.log(data)
    })
}
  return (
    <div className='mainBox'>
      <div className='topBox'>
      <input
          type="text"
          placeholder="Enter a city"
          className="inputBox"
         value = {searchData}
         onChange={(e)=>setSearchData(e.target.value)}
        />
        <button className='searchButton' onClick={searchCityFunc}>Search</button>
      </div>

      <div className='imageBox'>

</div>

{data && 
  <div className='weatherBox'>
    <h2>Today</h2>
    <p>Temperature:{Math.trunc(data.main.temp)}</p>
    <p>Maximum:{parseInt(data.main.temp_max)}</p>
    <p>Minumum:{data.main.temp_min}</p>
    <p>Weather:{data.weather[0].main}</p>
    <img src={sunny} alt="Image not working"/>
  </div>
}
    </div>
  )
}

export default App




