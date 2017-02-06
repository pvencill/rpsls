const Player = require('./player');

const MOVES = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class RandomPlayer extends Player {
  constructor() {
    super();
    this.min = 0;
    this.max = MOVES.length;
  }

  getMove(history, callback) {
    const move = MOVES[getRandom(this.min, this.max)];
    callback(null, move);
  }
}

module.exports = RandomPlayer;
