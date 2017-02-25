const jwt = require('passport-jwt');
const config = require('../');

const schemes = [
  jwt.ExtractJwt.fromAuthHeader(),
  jwt.ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
];

const options = {
  jwtFromRequest: jwt.ExtractJwt.fromExtractors(schemes),
  secretOrKey: config.secret,
};

const strategy = new jwt.Strategy(options, (payload, done) => {
  if (payload.username) {
    return done(null, payload);
  }
  return done(null, false);
});

module.exports = strategy;
