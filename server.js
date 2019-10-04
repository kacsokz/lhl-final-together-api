const ENV = process.env.NODE_ENV || 'development'
const dotEnvFilePath = __dirname + '/.env.' + ENV
require('dotenv').config({ path: dotEnvFilePath });

const PORT = process.env.PORT || 3000;
const CLIENTID = process.env.CLIENTID
const CLIENTSECRET = process.env.CLIENTSECRET
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const passport = require('passport');

const express = require('express');

const app = require("./src/application")(ENV);
// const server = require("http").Server(app);

passport.use(new LinkedInStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSECRET,
  callbackURL: "https://together-lhl-api.herokuapp.com/auth/linkedin/callback", //wont work on localhost
  scope: ['r_emailaddress', 'r_basicprofile'],
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

app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });


app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.listen(PORT, () => console.log("Im listening on " + PORT))