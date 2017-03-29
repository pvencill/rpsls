const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

function getPlayerIndex(player) {
  if (typeof (player) === 'number') {
    return player;
  }
  if (typeof (player) === 'string') {
    return ['player1', 'player2'].indexOf(player);
  }
  return null;
}

const HandSchema = new Schema({
  moves: [],
  result: {},
}, { timestamps: true });

const MatchSchema = new Schema({
  players: {
    type: [{ type: ObjectId, ref: 'Player', required: true }],
    validate: [a => a.length >= 2, 'An RPSLS match is limited to two players'],
  },
  hands: [HandSchema],
  countToWin: { type: Number, default: 3 },
}, { timestamps: true });

MatchSchema.statics.findOrCreate = function findOrCreate(query, body, cb) {
  this.find(query, (e, matches) => {
    if (e) return cb(e);
    const match = matches.find(m => !m.calculateScore().winner);
    if (match) return cb(null, match);
    return this.create(body, cb);
  });
};

MatchSchema.methods.calculateScore = function calculateScore() {
  const result = this.hands.reduce((acc, h) => {
    acc.wins[h.result.winner] += 1;
    acc.winner = acc.wins[h.result.winner] === this.countToWin ? h.result.winner : null;
    return acc;
  }, { wins: { player1: 0, player2: 0 }, winner: null });
  return result;
};

MatchSchema.methods.getMovesForPlayer = function getMovesForPlayer(player) {
  const playerIndex = getPlayerIndex(player);
  return this.hands.map(h => h.moves[playerIndex]);
};

MatchSchema.options.toJSON = MatchSchema.options.toJSON || {};
MatchSchema.options.toJSON.transform = function jsonTransform(doc, ret) {
  return {
    started: ret.createdAt,
    lastMove: ret.hands.length ? ret.hands[ret.hands.length - 1].createdAt : null,
    history: ret.hands.map((h) => {
      return {
        player1: { id: ret.players.length ? ret.players[0].id : null,
          move: h.moves.length ? h.moves[0] : null },
        player2: { id: ret.players.length > 1 ? ret.players[1].id : null,
          move: h.moves.length > 1 ? h.moves[1] : null },
        result: h.result || { winner: null, text: 'Tie!', win: '' },
      };
    }),
  };
};

mongoose.model('Match', MatchSchema);

module.exports = mongoose.model('Match');
