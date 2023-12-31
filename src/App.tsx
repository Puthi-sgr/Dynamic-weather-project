import { MouseEventHandler } from 'react';
import './App.css';
import './styles/cambodia.css'
import './styles/innerComponent.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Cambodia } from './svg/Cambodia';
import { WeatherPanel } from './components/weatherPanel';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Home_button } from './nav_component/home_but';
import {useContainer_generator_function} from './functions/3x3comp';

export interface PropsFunction {
  latHandler: (lat: number, long: number) => void
}
const App = () => {
  
  const [lat , setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const latHandler =  (latitude: number, longitude: number) => {
      setLat(latitude);
      setLong(longitude);
  }

  const APIfetcher = () => {
    try{
      if(lat && long !== null){
        const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d1091f7915facf9c525837ae6013c4a5`;
        axios.get(weatherAPIurl).then(res => {
            console.log(res.data)
            setWeatherData(res.data)
          }
        )
    }
    } catch(error){
      console.error('error', error)
    }
    
  }
  const [weatherData, setWeatherData] = useState(null)
  useEffect(() => {
    console.log(lat, long)
    APIfetcher();
  }, [lat, long])


  


  return (
        <div className="App">
          <BrowserRouter>
            
            <Home_button />
            <Routes>
              <Route path="/" element={
                <div>
                  Hero page
                </div>
              }/>

              <Route path="/s" element={
              <div className="Home">
                <Cambodia latHandler={latHandler}/>  
                <WeatherPanel data={weatherData}/>
              </div>} />
            </Routes>

          </BrowserRouter>
          
         
        </div>
   
  );
}

export default App;
