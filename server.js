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
    console.log(req.user.photos[0], "THIS IS THE PHOTO!!!!")
    // console.log(req.user._json.emails, "This is the EMAILLLLLLLLL")
    // console.log(req.user, "USERRRRRRRR")
    res.redirect('http://localhost:8000?username' + req.user.name.givenName);
  }
);

app.get('/auth/linkedin', passport.authenticate('linkedin'));

server.listen(PORT, () => console.log("Im listening on " + PORT))