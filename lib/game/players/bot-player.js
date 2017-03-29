/**
 This module is for fetching the moves from a bot player.
**/

const request = require('request');
const Player = require('./player');

class BotPlayer extends Player {
  constructor(url, secret) {
    super();
    this.url = url; // TODO: validate this
    this.secret = secret;
  }

  getMove(history, callback) {
    const options = {
      json: history, // TODO: match this to the API described
    };
// TODO: encrypt this as a JWT instead if this.secret
    if (this.secret) {
      options.headers = { Authorization: `Bearer ${this.secret}` };
    }

    request.post(this.url, options, (e, r, b) => {
      callback(e, b);
    });
  }
}

module.exports = BotPlayer;
