const passport = require('passport');
const CLIENTID = process.env.CLIENTID
const CLIENTSECRET = process.env.CLIENTSECRET
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

module.exports = () => {
// Allowing passport to serialize and deserialize users into sessions
passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))
passport.use(new LinkedInStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSECRET,
  callbackURL: "http://0b3334d3.ngrok.io/auth/linkedin/callback", //wont work on localhost
  scope: ['r_emailaddress', 'r_liteprofile'],
  // state: true
}, function(accessToken, refreshToken, profile, done) {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
}));
}