const evaluate = require('./evaluate');
const EventEmitter = require('events').EventEmitter;
const async = require('async');

function playHand(player1, player2, history, callback) {
  async.parallel({
    one: player1.getMove.bind(player1, history),
    two: player2.getMove.bind(player2, history),
  }, (err, results) => {
    if (err) return callback(err);

    const outcome = evaluate(results.one, results.two);
    this.emit('hand', outcome);
    history.push(outcome);
    return callback(null, history);
  });
}

class Match extends EventEmitter {
  constructor(player1, player2, rounds) {
    super();
    this.player1 = player1;
    this.player2 = player2;
    this.rounds = rounds;
    this.results = [];
  }

  start() {
    const hands = Array(this.rounds).fill()
                                    .map(() => playHand.bind(this, this.player1, this.player2));
    hands[0] = hands[0].bind(this, []);
    async.waterfall(hands, (err, results) => {
      console.log('done!');
      console.log(results);
    });
  }
}

module.exports = Match;
