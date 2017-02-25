module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  expiry: process.env.SESSION_TIMEOUT || 60 * 24 * 7, // 1 week default
  secret: process.env.SESSION_SECRET || 'I find your lack of faith disturbing...',
  db: process.env.MONGO_URL || 'mongodb://localhost:27017/rpsls',
  ldap: {
    url: process.env.LDAP_URL || 'ldap://ldap-user.mitre.org',
    adminDn: '',
    adminPassword: '',
    searchBase: 'ou=People,o=mitre.org',
    searchFilter: '(uid={{username}})',
  },
};
