require('dotenv').config();

const PORT = process.env.PORT || 3001;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Team')
})

app.listen(PORT, () => console.log("Im listening on " + PORT))