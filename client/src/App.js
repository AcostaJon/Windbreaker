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
  const [isDay, setIsDay] = useState(0)
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
  // input value;
  const [inputValue, setInputValue] = useState("New York City");

  // 1st: Get data
  useEffect(() => {
    // run postFetchData function
    postFetchData()

  }, [inputValue])

  // POST REQUEST: retrun weather data 
  async function postFetchData() {
    try {
      // get current date and time
      const now = new Date();
      // convert to string
      const dayAndTime = now.toString()
      // slice up to the year
      setCurrentTime(dayAndTime.slice(0, 15))
      const dataToSend = {
        location: inputValue,
      };

      // post request
        // current weather data
      const getCurrent = await axios.post("https://windbreaker-server.vercel.app/current", dataToSend)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.error('Error sending data:', error.message);
        });
        // Astronomy weather
      const getAstronomy = await axios.post("https://windbreaker-server.vercel.app/astro", dataToSend)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.error('Error sending data:', error.message);
        });

      // update state
      // current
      setCurrentWeatherData(getCurrent);
      setCurrentAstroData(getAstronomy)
      setCurrentTemp(getCurrent.current.temp_f);
      setConditionText(getCurrent.current.condition.text);
      setConditionIcon(getCurrent.current.condition.icon);
      setLocation(getCurrent.location.name);
      setRegion(getCurrent.location.region);
      setFeelsLike(getCurrent.current.feelslike_f);
      setIsDay(getCurrent.current.is_day)

      // forecast
      setCloudCover(getCurrent.current.cloud);
      setWindDirection(getCurrent.current.wind_dir);
      setHumidity(getCurrent.current.humidity);
      setDay1Date(getCurrent.forecast.forecastday[0].date);
      setDay1Temp(getCurrent.forecast.forecastday[0].day.avgtemp_f);
      setDay1ConditionIcon(getCurrent.forecast.forecastday[0].day.condition.icon);
      setDay1ConditionText(getCurrent.forecast.forecastday[0].day.condition.text);
      setDay2Date(getCurrent.forecast.forecastday[1].date);
      setDay2Temp(getCurrent.forecast.forecastday[1].day.avgtemp_f);
      setDay2ConditionIcon(getCurrent.forecast.forecastday[1].day.condition.icon);
      setDay2ConditionText(getCurrent.forecast.forecastday[1].day.condition.text);
      setDay3Date(getCurrent.forecast.forecastday[2].date);
      setDay3Temp(getCurrent.forecast.forecastday[2].day.avgtemp_f);
      setDay3ConditionIcon(getCurrent.forecast.forecastday[2].day.condition.icon);
      setDay3ConditionText(getCurrent.forecast.forecastday[2].day.condition.text);
      // astronomy
      setSunrise(getAstronomy.astronomy.astro.sunrise);
      setSunset(getAstronomy.astronomy.astro.sunset);
      setMoonPhase(getAstronomy.astronomy.astro.moon_phase);
    } catch (error) {
      alert("ERROR: Enter city name or zipcode and try again")
      console.error(error);
    }

  }

  // offcanvas menu 
  const offConvasMenuButton = (e) => {
    // offcanvas menu
    const menuElement = document.getElementById("offCanvasMenu");
    // show and hide
    if (menuElement.style.display === "none") {
      menuElement.style.display = "block";
    } else {
      menuElement.style.display = "none";
    }
  }

  // offcanvas menu close handler
  const offConvasMenuClose = (e) => {
    // menu element
    const menuElement = e.target.parentElement.parentElement
    // show and hide
    if (menuElement.style.display === "none") {
      menuElement.style.display = "block";
    } else {
      menuElement.style.display = "none";
    }

  }

  // offcanvas form submit
  const offConvasFormSubmit = (e) => {
    // off canvas menu 
    const menuElement = document.getElementById("offCanvasMenu");
    // strop page refresh
    e.preventDefault()
    // user input Value
    const value = e.target[0].value;
    // update state
    setInputValue(value)
    // clear input element
    const input = e.target[0];
    input.value = ""
    menuElement.style.display = "none";
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
    offConvasMenuClose,
    offConvasFormSubmit,
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
    moonPhase,
    isDay
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
