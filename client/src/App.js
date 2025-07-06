import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// context api
import { MyContext } from './components/MyContext.js';
// components
import Header from './components/header/header.js'
import Current from './components/current/current.js'
import Astro from './components/astro/astro.js';
import Forecast from './components/forecast/forecast.js';
import OffCanvasMenu from './components/offCanvasMenu/menu.js'

function App() {
  // State
  const [currentWeatherData, setCurrentWeatherData] = useState("")
  const [currentAstroData, setCurrentAstroData] = useState("")
  // current weather
  const [currentTemp, setCurrentTemp] = useState("")
  const [conditionText, setConditionText] = useState("")
  const [conditionIcon, setConditionIcon] = useState("./wind.svg");
  const [location, setLocation] = useState("")
  const [region, setRegion] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  // forecast box
  const [cloudCover, setCloudCover] = useState("")
  const [windDirection, setWindDirection] = useState("");
  const [humidity, setHumidity] = useState("");
  const [day1Date, setDay1Date] = useState("")
  const [day1Temp, setDay1Temp] = useState("")
  const [day1ConditionIcon, setDay1ConditionIcon] = useState("./wind.svg")
  const [day1ConditionText, setDay1ConditionText] = useState("")
  const [day2Date, setDay2Date] = useState("")
  const [day2Temp, setDay2Temp] = useState("")
  const [day2ConditionIcon, setDay2ConditionIcon] = useState("./wind.svg")
  const [day2ConditionText, setDay2ConditionText] = useState("")
  const [day3Date, setDay3Date] = useState("")
  const [day3Temp, setDay3Temp] = useState("")
  const [day3ConditionIcon, setDay3ConditionIcon] = useState("./wind.svg")
  const [day3ConditionText, setDay3ConditionText] = useState("")
  // astronomy
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")
  const [moonPhase, setMoonPhase] = useState("");

  // 1st: Get data
  useEffect(() => {
    // run fetchData function
    fetchData()

  }, [])

  // Get request
  async function fetchData() {
    try {
      // get current date and time
      const now = new Date();
      // convert to string
      const dayAndTime = now.toString()
      // slice up to the year
      setCurrentTime(dayAndTime.slice(0, 15))

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
      setDay1Date(getCurrent.data.forecast.forecastday[0].date);
      setDay1Temp(getCurrent.data.forecast.forecastday[0].day.avgtemp_f);
      setDay1ConditionIcon(getCurrent.data.forecast.forecastday[0].day.condition.icon);
      setDay1ConditionText(getCurrent.data.forecast.forecastday[0].day.condition.text);
      setDay2Date(getCurrent.data.forecast.forecastday[1].date);
      setDay2Temp(getCurrent.data.forecast.forecastday[1].day.avgtemp_f);
      setDay2ConditionIcon(getCurrent.data.forecast.forecastday[1].day.condition.icon);
      setDay2ConditionText(getCurrent.data.forecast.forecastday[1].day.condition.text);
      setDay3Date(getCurrent.data.forecast.forecastday[2].date);
      setDay3Temp(getCurrent.data.forecast.forecastday[2].day.avgtemp_f);
      setDay3ConditionIcon(getCurrent.data.forecast.forecastday[2].day.condition.icon);
      setDay3ConditionText(getCurrent.data.forecast.forecastday[2].day.condition.text);
      // astronomy
      setSunrise(getAstronomy.data.astronomy.astro.sunrise);
      setSunset(getAstronomy.data.astronomy.astro.sunset);
      setMoonPhase(getAstronomy.data.astronomy.astro.moon_phase);

    } catch (error) {
      console.error(error);
    }
  }

  // offcanvas button handler
  function offConvasMenuButton(e) {
    
  }

  // values for context api
  const contextValues = {
    currentTemp,
    conditionText,
    conditionIcon,
    location,
    region,
    feelsLike,
    currentTime,
    offConvasMenuButton,
    cloudCover,
    windDirection,
    humidity,
    day1Date,
    day1Temp,
    day1ConditionIcon,
    day1ConditionText,
    day2Date,
    day2Temp,
    day2ConditionIcon,
    day2ConditionText,
    day3Date,
    day3Temp,
    day3ConditionIcon,
    day3ConditionText,
    sunrise,
    sunset,
    moonPhase
  }

  return (
    <MyContext.Provider value={contextValues}>
      <div className="App">
        <OffCanvasMenu />
        <Header />
        <Current />
        <Forecast />
        <Astro />
      </div>
    </MyContext.Provider>
  );
}

export default App;
