// const MatchModel = require('../models/match');
const jwt = require('jsonwebtoken');
const async = require('async');
const praeter = require('praeter');
const Player = require('../models/player');
const Bot = require('../models/bot');
const Match = require('../models/match');
const config = require('../../../config');
const log = require('../../../log');
const BotPlayer = require('../../game/players/bot-player');
const evaluate = require('../../game/evaluate');

function startMatch(socket, info) {
  const user = jwt.verify(info.user, config.secret);
  if (!user) return socket.emit('authorization failure');
  socket.auth = user;

  log.access(`Match started by ${user.employeeNumber}`);

  return async.parallel({
    human: (cb) => {
      Player.findOrCreate({ businessId: user.employeeNumber },
        { name: user.displayName, businessId: user.employeeNumber, type: 'human' }, cb);
    },
    bot: (cb) => {
      Bot.findById(info.bot, (e, bot) => {
        if (e) return cb(e);
        if (!bot) return cb(new praeter.errors.NotFound('Bot not found'));
        socket.bot = bot;
        return Player.findOrCreate({ businessId: info.bot },
          { name: info.bot, businessId: info.bot, type: 'bot' }, cb);
      });
    },
  }, (e, results) => {
    if (e) {
      log.error(e);
      socket.emit('battle error', { code: 500, message: `Error creating players for match ${user.displayName} / ${info.bot}` });
    }

    const players = [results.human.id, results.bot.id];
    Match.findOrCreate({ players: { $all: players } }, { players }, (err, match) => {
      if (err) {
        log.error(err);
        return socket.emit('battle error', { code: 500, message: `Error saving match: ${err.message}` });
      }
      socket.match = match;
      return socket.emit('match', match.toJSON());
    });
  });
}

function handleMove(socket, move) {
  log.verbose('Making a move');
  const botPlayer = new BotPlayer(socket.bot.url, socket.bot.secret);
  const match = socket.match;

  if (!match) {
    return socket.emit('battle error', { code: 404, message: 'A match has not begun' });
  }

  if (match.calculateScore().winner) {
    return socket.emi('battle error', { code: 409, message: 'This match already has a winner' });
  }

  const info = match.toJSON();
  info.opponent = match.players[0];

  return botPlayer.getMove(info, (e, botMove) => {
    if (e) log.error(e);
    const result = evaluate(move, botMove);
    const hand = socket.match.hands.create({
      moves: [move, botMove],
      result,
    });
    socket.match.hands.push(hand);
    socket.match.markModified('hands');
    socket.match.save((err) => {
      if (e) return socket.emit('battle error', { code: 500, message: `Error saving match: ${err.message}` });
      const winner = socket.match.calculateScore().winner;
      if (winner) {
        return socket.emit('winner', { winner, match: socket.match.toJSON() });
      }
      return socket.emit('result', socket.match.toJSON());
    });
  });
}

function disconnect() {
  log.verbose('Disconnecting user');
}

function listen(socket) {
  log.verbose('WebSocket Connection');
  socket.auth = false;
  socket.on('make move', handleMove.bind(null, socket))
        .on('battle', startMatch.bind(null, socket))
        .on('disconnect', disconnect);
}


module.exports = listen;
