require('dotenv').config();
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const passport = require('passport');

const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();

passport.use(new LinkedInStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSECRET,
  callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback", //wont work on localhost
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