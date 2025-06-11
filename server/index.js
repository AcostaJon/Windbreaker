const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const cors = require('cors');

// Enable parsing of JSON request bodies
app.use(express.json());

// Enable CORS for all origins (for development/testing)
// In production, restrict origins to specific domains.
app.use(cors({
  origin: '*'
}));

// Home
app.get('/', async(req, res) => {
    const location = req.params.location
    try {
        res.json({message : "Welcome to windbreaker server, Below are some api routes",
            route1 : "get_current/:location zipcode or city name",
            route2 : "get_astronomy/:location zipcode or city name"
        })
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
});

// GET current weather of location
app.get('/get_current/:location', async(req, res) => {
    const location = req.params.location
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=36279875f3bd444e934214049221502&q=${location}&days=3&aqi=yes&alerts=yes`);
        res.json(response.data); // Send the API response back to the client
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
});

// GET astronomy of current location
app.get('/get_astronomy/:location', async(req, res) => {
    const location = req.params.location
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=36279875f3bd444e934214049221502&q=${location}&dt=2025-06-11`);
        res.json(response.data); // Send the API response back to the client
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});