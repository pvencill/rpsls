const app = require('./');
const config = require('./config');
const log = require('./log');

app.listen(config.port, () => {
  log.info(`RPSLS-server listening on port ${config.port}`);
});
