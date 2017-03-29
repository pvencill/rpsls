const RandomPlayer = require('../../game/players/random-player');

module.exports = {
  simpleRandom: (req, res, next) => {
    const player = new RandomPlayer();
    console.log(req.body);
    player.getMove(req.body, (e, move) => {
      if (e) return next(e);
      return res.send(move);
    });
  },
};
