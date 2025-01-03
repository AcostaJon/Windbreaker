'use client'
import { useEffect, useState } from "react";
// my components
import Today from "./components/today/today";
import Forecast from "./components/forecast/forecast";
import Astronomy from "./components/astronomy/astronomy";
import OffCanvasMenu from "./components/offCanvasMenu/offCanvasMenu";


export default function Home() {
  // Today
  const [data, setData] = useState();
  const [todayWeather, setTodayWeather] = useState(); // temp in fareighnheit
  // forecast
  const [day1Forecast, setDay1Forecast] = useState({})  // todays forecast
  const [day2Forecast, setDay2Forecast] = useState({}) // tomorrows forecast
  const [day3Forecast, setDay3Forecast] = useState({}) // 3rd day forecast
  // astronomy
  const [todayAstro, setTodayAstro] = useState('') // todays astronomy
  // searched location
  const [searchedLocation, setSearchedLocation] = useState(); // user searched location

  useEffect(() => {
    // get todays forecast
    fetch('/api/getForecast')
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        setData(data)
        // store response data in variables
        const name = data.forecast.location.name
        const temp = data.forecast.current.temp_f
        const conditionIcon = data.forecast.current.condition.icon
        const conditionText = data.forecast.current.condition.text
        const region = data.forecast.location.region
        const feelsLike = data.forecast.current.feelslike_f
        const windSpeed = data.forecast.current.wind_mph
        const windDirection = data.forecast.current.wind_dir
        const cloudCover = data.forecast.current.cloud

        // store response variables in object
        const today = {
          temp: temp,
          conditionIcon: conditionIcon,
          conditionText: conditionText,
          name: name,
          region: region,
          feelsLike: feelsLike,
          windSpeed: windSpeed,
          windDirection: windDirection,
          cloudCover: cloudCover,
        }

        // searched location
        const searched = {
          name: name,
          region: region,
          temp: temp,
        }

        // update state
        setTodayWeather(today)
        setSearchedLocation(searched)
      })

    // get next days forecast
    fetch('/api/getForecast')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setDay1Forecast(data.forecast.forecast.forecastday[0])
        setDay2Forecast(data.forecast.forecast.forecastday[1])
        setDay3Forecast(data.forecast.forecast.forecastday[2])
      })

    // get todays atronomy 
    fetch('/api/getAstro')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setTodayAstro(data)
      })

  }, [])

  // search city hanlder
  const search = async (e) => {

    try {
      const todaysIcon = window.document.getElementById('todayIcon')
      // check if todays icon has animation, if it does then remove it
      if (todaysIcon.classList.contains('rotate-center')) {
        todaysIcon.classList.remove('rotate-center')
      }
      // prevent page reload
      e.preventDefault()

      // form input
      const input = e.target[0].value;

      // fetch post Astro 
      const astroRes = await fetch('/api/postAstro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      });

      // fetch post forecast
      const forecastRes = await fetch('/api/postForeCast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      });

      // responses
      const astroResponse = await astroRes.json();
      const forecastResponse = await forecastRes.json();

      // store response data in variables
      const temp = forecastResponse.forecast.current.temp_f
      const conditionIcon = forecastResponse.forecast.current.condition.icon
      const conditionText = forecastResponse.forecast.current.condition.text
      const name = forecastResponse.forecast.location.name
      const region = forecastResponse.forecast.location.region
      const feelsLike = forecastResponse.forecast.current.feelslike_f
      const windSpeed = forecastResponse.forecast.current.wind_mph
      const windDirection = forecastResponse.forecast.current.wind_dir
      const cloudCover = forecastResponse.forecast.current.cloud

      // store response variables in object
      const today = {
        temp: temp,
        conditionIcon: conditionIcon,
        conditionText: conditionText,
        name: name,
        region: region,
        feelsLike: feelsLike,
        windSpeed: windSpeed,
        windDirection: windDirection,
        cloudCover: cloudCover,
      }
      // searched location
      const searched = {
        name: name,
        region: region,
        temp: temp,
      }

      // updste state
      setTodayAstro(astroResponse)
      setDay1Forecast(forecastResponse.forecast.forecast.forecastday[0]);
      setDay2Forecast(forecastResponse.forecast.forecast.forecastday[1])
      setDay3Forecast(forecastResponse.forecast.forecast.forecastday[2])
      setTodayWeather(today)
      setSearchedLocation(searched);

      // add animation to todays icon after 1 second of loading
      setTimeout(() => {
        todaysIcon.classList.add('rotate-center')
      }, "1000");


    } catch (error) {
      alert("Location not found. Please try again")
    }

  }

  return (
    <>
      <OffCanvasMenu search={search} searchedLocation={searchedLocation} />
      <Today todayWeather={todayWeather} />
      <Forecast forecast={{ day1Forecast, day2Forecast, day3Forecast }} todayWeather={todayWeather} />
      <Astronomy astronomy={todayAstro} />
    </>
  );
}
