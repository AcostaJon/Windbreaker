const express = require("express")
const axios = require('axios');

const app = express();

const port = 5000;

// route "/"
app.get('/', async (req, res) => {
  try {
    
    res.send("Welcome to WindBreakers server");

  } catch (error) {
    res.send("error while returning forecast response: " + error);
  }
});

// route "/getForecast" 3 day
app.get('/getForecast', async (req, res) => {
  try {
    const forecastRes = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=36279875f3bd444e934214049221502&q=west palm beach&days=3&aqi=no&alerts=no')
      .then((data) => {
        return data
      })

    res.send(forecastRes.data);

  } catch (error) {
    res.send("error while returning forecast response: " + error);
  }
});

// route "/getAstronomy" current day
app.get('/getAstronomy', async (req, res) => {
  try {
    const astronomyRes = await axios.get('https://api.weatherapi.com/v1/astronomy.json?key=36279875f3bd444e934214049221502&q=west palm beach')
      .then((data) => {
        return data
      })

    res.send(astronomyRes.data);

  } catch (error) {
    res.send("error while returning astronomy response: " + error);
  }
});

// listen to port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

