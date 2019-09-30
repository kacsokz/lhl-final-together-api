require('dotenv').config();

const PORT = process.env.PORT || 3001;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Team')
})

app.get('/api/users', (req, res) => {
  res.send([
    {
      "id": 1,
      "first_name": "Randy",
      "last_name": "Calhoon",
      "email": "randy.calhoon@gmail.com",
      "avatar": "https://i.imgur.com/LpaY82x.png",
      "tag_line": "Always ready to rock and/or roll!"
    }
  ])
})

app.listen(PORT, () => console.log("Im listening on " + PORT))