import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useTransition } from 'react';
import axios from 'axios';


function App() {
  // State
  const [weatherData, setWeatherData] = useState("")
  const [temp, setTemp] = useState("")
  const [conditionText, setConditionText] = useState("")
  const [conditionIcon, setConditionIcon] = useState("");

  // 1st: Get data
  useEffect(() => {
    fetchData()

  },[])

  async function fetchData() {
    try {
      const response = await axios.get('https://windbreaker-server.vercel.app/get_current/02907');

      setWeatherData(response.data)
      setTemp(response.data.current.temp_f)
      setConditionText(response.data.current.condition.text)
      setConditionIcon(response.data.current.condition.icon)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
      </header>
    </div>
  );
}

export default App;
