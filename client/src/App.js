import './App.css';
import { useState, useEffect, useTransition } from 'react';
import axios from 'axios';
// components
import Header from './components/header/header.js'
import Current from './components/current/current.js'
import Astro from './components/astro/astro.js';
import Forecast from './components/forecast/forecast.js';

function App() {
  // State
  const [currentWeatherData, setCurrentWeatherData] = useState("")
  const [currentAstroData, setCurrentAstroData] = useState("")
  // current weather
  const [currentTemp, setCurrentTemp] = useState("")
  const [conditionText, setConditionText] = useState("")
  const [conditionIcon, setConditionIcon] = useState("");
  const [location, setLocation] = useState("")
  const [region, setRegion] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  // forecast box
  const [cloudCover, setCloudCover] = useState("")
  const [windDirection, setWindDirection] = useState("");
  const [humidity, setHumidity] = useState("");
  const [day1, setDay1] = useState("")
  const [day2, setDay2] = useState("")
  const [day3, setDay3] = useState("")
  // astronomy
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")
  const [moonPhase, setMoonPhase] = useState("");

  // 1st: Get data
  useEffect(() => {
    // run fetchData function
    fetchData()
  
  },[])

  // Get request
  async function fetchData() {
    try {
      // get current date and time
      const now = new Date();
      // convert to string
      const dayAndTime = now.toString() 
      // slice up to the year
      setCurrentTime(dayAndTime.slice(0,15))

      // GET request 
      const getCurrent = await axios.get('https://windbreaker-server.vercel.app/get_current/02907');
      const getAstronomy = await axios.get('https://windbreaker-server.vercel.app/get_astronomy/02907')
      // update state
      // current
      setCurrentWeatherData(getCurrent.data);
      setCurrentAstroData(getAstronomy.data)
      setCurrentTemp(getCurrent.data.current.temp_f);
      setConditionText(getCurrent.data.current.condition.text);
      setConditionIcon(getCurrent.data.current.condition.icon);
      setLocation(getCurrent.data.location.name);
      setRegion(getCurrent.data.location.region);
      setFeelsLike(getCurrent.data.current.feelslike_f);
      // forecast
      setCloudCover(getCurrent.data.current.cloud);
      setWindDirection(getCurrent.data.current.wind_dir);
      setHumidity(getCurrent.data.current.humidity);
      setDay1(getCurrent.data.forecast.forecastday[0]);
      setDay2(getCurrent.data.forecast.forecastday[1]);
      setDay3(getCurrent.data.forecast.forecastday[2]);
      // astronomy
      setSunrise(getAstronomy.data.astronomy.astro.sunrise);
      setSunset(getAstronomy.data.astronomy.astro.sunset);
      setMoonPhase(getAstronomy.data.astronomy.astro.moon_phase);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Header />
      <Current />
      <Forecast />
      <Astro />
    </div>
  );
}

export default App;
