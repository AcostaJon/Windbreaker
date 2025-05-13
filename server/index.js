const express = require("express")

const app = express();

const port = 5000;

// route "/"
app.get('/', (req, res) => {
    res.send('Hello Worlfasfdtgeqwrgt!');
  });

// listen to port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

