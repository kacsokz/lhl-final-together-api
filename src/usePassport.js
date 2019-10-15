const passport = require('passport');
const CLIENTID = process.env.CLIENTID
const CLIENTSECRET = process.env.CLIENTSECRET
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const ENV = process.env.NODE_ENV || 'development'

module.exports = () => {
// Allowing passport to serialize and deserialize users into sessions


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

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))
passport.use(new LinkedInStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSECRET,
  callbackURL: "https://together-lhl-api.herokuapp.com/auth/linkedin/callback", //wont work on localhost
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function(accessToken, refreshToken, profile, done) {
    // the user's LinkedIn profile is returned to
    // represent the logged-in user and
    // associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
}));
}