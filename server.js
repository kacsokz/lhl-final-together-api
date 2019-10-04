const ENV = process.env.NODE_ENV || 'development'
const dotEnvFilePath = __dirname + '/.env.' + ENV
require('dotenv').config({ path: dotEnvFilePath });

const PORT = process.env.PORT || 3000;
const CLIENTID = process.env.CLIENTID
const CLIENTSECRET = process.env.CLIENTSECRET
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const passport = require('passport');
const session = require('express-session');
const socketio = require('socket.io');
const http = require('http')

const app = require("./src/application")(ENV);
server = http.createServer(app)
// const server = require("http").Server(app);
app.use(passport.initialize());

passport.use(new LinkedInStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSECRET,
  callbackURL: "http://6dbb7a59.ngrok.io/auth/linkedin/callback", //wont work on localhost
  scope: ['r_emailaddress', 'r_liteprofile'],
  // state: true
}, function(accessToken, refreshToken, profile, done) {
  console.log(accessToken, "token");
  // asynchronous verification, for effect...
  process.nextTick(function (req, res) {
    console.log(req, "requeeeeeeeeeeeeeeeest")
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));

app.use(session({ 
  secret: 'process.env.SESSION_SECRET', 
  resave: true, 
  saveUninitialized: true
}))

// Connecting sockets to the server and adding them to the request 
// so that we can access them later in the controller
const io = socketio(server)
app.set('io', io)

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', (error, user, info) => {

  console.log()
  res.redirect("http://localhost:5000/");
});


app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: 'http://localhost:8000/',
  failureRedirect: '/login',
  session: false
  }),
  (req, res) => {
    res.redirect("http://localhost:5000/");
  }
);

server.listen(PORT, () => console.log("Im listening on " + PORT))