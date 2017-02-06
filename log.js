const debug = require('debug');

module.exports = {
  verbose: debug('rpsls-server:verbose'),
  info: debug('rpsls-server:info'),
  error: debug('rpsls-server:error'),
};
