const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

// Enable parsing of JSON request bodies
app.use(express.json());

// For parsing application/json
app.use(bodyParser.json());

// Enable CORS for all origins (for development/testing)
// In production, restrict origins to specific domains.
app.use(cors({
  origin: '*'
}));


// Home
app.get('/', async (req, res) => {
  try {
    res.json({
      message: "Welcome to windbreaker server, Below are some post api routes",
      route1: "current/:location zipcode or city name",
      route2: "astro/:location zipcode or city name"
    })
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Post current weather of location
app.post('/current', async (req, res) => {
  // user input: location
  const userInput = req.body.location; // Access the data sent in the request body

  // GET request get current weather
  try {
    // GET current weather
    const currentWeather = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=36279875f3bd444e934214049221502&q=${userInput}&days=3&aqi=yes&alerts=yes`);
    // return response
    res.json(currentWeather.data); // Send the API response back to the client
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }

});

// Post astronomy weather of location
app.post('/astro', async (req, res) => {
  // user input: location
  const userInput = req.body.location; // Access the data sent in the request body

  // GET request get current weather
  try {
    // GET current weather
    const astroWeather = await axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=36279875f3bd444e934214049221502&q=${userInput}&days=3&aqi=yes&alerts=yes`);
    // return response
    res.json(astroWeather.data); // Send the API response back to the client
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }

});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});