const debug = require('debug');

module.exports = {
  verbose: debug('rpsls-server:verbose'),
  info: debug('rpsls-server:info'),
  access: debug('rpsls-server:access'),
  error: debug('rpsls-server:error'),
};
