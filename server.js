const ENV = process.env.NODE_ENV || 'development'
const dotEnvFilePath = __dirname + '/.env.' + ENV
require('dotenv').config({ path: dotEnvFilePath });

const PORT = process.env.PORT || 3000;
const passport = require('passport');
const session = require('express-session');
const socketio = require('socket.io');
const http = require('http');
const usePassport = require('./src/usePassport');
const app = require("./src/application")(ENV);
const db = require("./src/db");
const query = require("./src/db/queries")(db)

server = http.createServer(app)
const forntEndURL = (arg) => {
  let url
  if (arg === "development") {
    url = 'http://localhost:8000'
  }
  else {
    url = 'https://together-lhl-gui.netlify.com'
  }
  return url
}

const url = forntEndURL(ENV)

app.use(passport.initialize());
usePassport();
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: true,
  saveUninitialized: true
}))

// Connecting sockets to the server and adding them to the request 
// so that we can access them later in the controller
const io = socketio(server)
app.set('io', io)


app.get('/auth/linkedin/callback', passport.authenticate('linkedin'),
  (req, res) => {
    const photo = (arg) => {
      let value
      if (arg.length > 0) {
        value = req.user.photos[1].value
      }
      else {
        value = 'http://morrisinsurancegroup.com/wp-content/uploads/2018/01/blank-avatar.png'
      }
      return value
    }
    let templateVars = {
      first_name: req.user.name.givenName,
      last_name: req.user.name.familyName,
      email: req.user.emails[0].value,
      avatar: photo(req.user.photos)
    }
    query.getUserByEmail(req.user.emails[0].value)
      .then(result => {
        if (result !== req.user.emails[0].value) {
          query.createUser(templateVars)
            .then(query.getUserIdByEmail(req.user.emails[0].value)
              .then(user_id => {
                res.redirect(url + '?user_id=' + user_id[0].id)
              })
              .catch(error => console.log(error))
            );
        }
        else {
          query.getUserIdByEmail(req.user.emails[0].value)
            .then(user_id => {
              // console.log('login', url)
              res.redirect(url + '?user_id=' + user_id[0].id)
            })
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));
  }
);

app.get('/auth/linkedin', passport.authenticate('linkedin'));

server.listen(PORT, () => console.log("Im listening on " + PORT))