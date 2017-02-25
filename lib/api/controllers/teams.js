/* eslint no-underscore-dangle: 0 */
const praeter = require('praeter');
const async = require('async');
const Team = require('../models/team');
const Bot = require('../models/bot');

module.exports = {
  find: (req, res, next, id) => {
    Team.findById(id).populate('bots').exec((e, team) => {
      if (e) return next(e);
      if (!team) return next(new praeter.errors.NotFound());
      req.team = team;
      return next();
    });
  },
  list: (req, res, next) => {
    if (req.team) return res.send(req.team);
    const query = {};
    if (req.query.user) {
      query.members = req.query.user;
    }
    return Team.find(query, (e, teams) => {
      if (e) return next(e);
      return res.send(teams);
    });
  },
  save: (req, res, next) => {
    const { name, members } = Object.assign({ members: [req.user.employeeNumber] }, req.body);
    let team = req.team || new Team();
    team = Object.assign(team, { name, members });
    team.save((e) => {
      if (e) {
        if (e.code === '11000') return next(new praeter.errors.Conflict('Team name already taken'));
        return next(e);
      }
      return res.send(team);
    });
  },
  remove: (req, res, next) => {
    async.parallel([
      Bot.remove({ _id: { $in: req.team.bots } }).exec,
      Team.remove({ _id: req.team._id }),
    ], (e) => {
      if (e) return next(e);
      return res.status(204).send();
    });
  },
  addBot: (req, res, next) => {
    const { name, url, secret } = req.body;
    let bot = new Bot();
    bot = Object.assign(bot, { name, url, secret });

    if (!req.team) {
      return next(new praeter.errors.BadRequest('team is required to create a bot'));
    }

    const operations = [bot.save.bind(bot)];
    const team = req.team;
    if (!team.bots.some(item => item.id === bot.id)) {
      team.bots.push(bot);
      operations.push(team.save.bind(team));
    }
    return async.parallel(operations, (e) => {
      if (e) return next(e);
      return res.send(bot);
    });
  },
  removeBot: (req, res, next) => {
    if (!req.bot) return next(new praeter.errors.NotFound());
    const team = req.team;
    return async.parallel([
      Bot.findByIdAndRemove.bind(Bot, req.bot.id),
      (done) => {
        team.bots = team.bots.filter(item => !item.equals(req.bot.id));
        return team.save(done);
      },
    ], (e) => {
      if (e) return res.send(e);
      return res.status(204).send();
    });
  },
};
