const LdapStrategy = require('passport-ldapauth').Strategy;
const config = require('../');

const ldap = new LdapStrategy({
  server: config.ldap,
}, (user, done) => {
  done(null, {
    username: user.uid,
    displayName: user.cn,
    employeeNumber: user.employeenumber,
    email: user.mail,
    photo: `http://static.mitre.org/people/photos/big/${user.employeenumber}.jpg`,
  });
});

module.exports = ldap;
