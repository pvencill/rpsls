const passport = require('passport');
const ldapStrategy = require('./ldap');
const jwtStrategy = require('./jwt');

function configure() {
  passport.use('ldap', ldapStrategy);
  passport.use('jwt', jwtStrategy);
  return passport;
}

module.exports = configure();
