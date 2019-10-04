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
server = http.createServer(app)
// const server = require("http").Server(app);

passport.use(new LinkedInStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSECRET,
  callbackURL: "https://together-lhl-api.herokuapp.com/auth/linkedin/callback", //wont work on localhost
  scope: ['r_emailaddress', 'r_liteprofile'],
  // state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));


app.get('/auth/linkedin/callback', passport.authenticate('linkedin'),
  (req, res) => {
    console.log(req.user.photos[0], "THIS IS THE PHOTO!!!!")
    // console.log(req.user._json.emails, "This is the EMAILLLLLLLLL")
    // console.log(req.user, "USERRRRRRRR")
    res.redirect('http://localhost:8000?username' + req.user.name.givenName);
  }
);

app.get('/auth/linkedin', passport.authenticate('linkedin'));

server.listen(PORT, () => console.log("Im listening on " + PORT))