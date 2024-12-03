'use client'
import styles from "./page.module.css";
import currentWeatherApi from "./api/CurrentWeather";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [state, setState] = useState("Flor");
  const [city, setCity] = useState("west p");
  const [temp, setTemp] = useState();
  const [forecastIcon, setforecastIcon] = useState();
  const [isday, setIsDay] = useState();
  const [conditionText, setConditionText] = useState();
  const [searchValue, setSearchValue] = useState('33406');

  // after render, fetch data, update state
  useEffect(() => {
    const apicall = currentWeatherApi(searchValue);
    apicall.then((data) => {
      setData(data)
      setCity(data.location.name)
      setState(data.location.region)
      setTemp(data.current.temp_f)
      setIsDay(data.current.is_day)
      setforecastIcon(data.current.condition.icon)
      setConditionText(data.current.condition.text)
    })
      .catch((err) => {
        alert("Search city name or zipcode and ty again");
        console.log(err)
      });

  }, [searchValue])

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target[0].value);
    e.target[0].value = '';
  }

  // return the day of the week
  const getDayOfWeek = () => {
    // get and set day of week
    const d = new Date();
    const day = d.getDay()
    let currentDay;
    if (day === 0) {
      currentDay = "Sunday"
    } else if (day === 1) {
      currentDay = "Monday"
    } else if (day === 2) {
      currentDay = "Tuesday"
    } else if (day === 3) {
      currentDay = "Wednesday"
    } else if (day === 4) {
      currentDay = "Thurssday"
    } else if (day === 5) {
      currentDay = "Friday"
    } else if (day === 6) {
      currentDay = "Saturday"
    }

    return currentDay;
  }

  // return day/night - background image for app
  const setBackgroundImage = (isday) => {
    // set app background image
    let backgroundImage;
    if (isday == 1) {
      backgroundImage = "isDay"
    } else {
      backgroundImage = "isNight"
    }
    return backgroundImage
  }

  return (
    <main className={`${styles.main} ${setBackgroundImage(isday)}`}>
      {/* input form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={searchValue} />
        <input type="submit" />
      </form>
      {/* content */}
      <section>
        <div className={styles.contentContainer}>
          <h2>{Math.ceil(temp)}<sup>&deg;</sup>F</h2>
          <img src={forecastIcon} />
          <h3>{city.slice(0, 5)},{state.slice(0, 5)}</h3>
          <h1>{getDayOfWeek()}</h1>
        </div>
      </section>
    </main>
  );
}
