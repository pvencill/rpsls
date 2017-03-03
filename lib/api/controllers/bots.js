/* eslint no-underscore-dangle: 0 */
const praeter = require('praeter');
const Bot = require('../models/bot');

module.exports = {
  find: (req, res, next, id) => {
    Bot.findById(id, (e, bot) => {
      if (e) return next(e);
      if (!bot) return next(new praeter.errors.NotFound());
      req.bot = bot;
      return next();
    });
  },
  list: (req, res, next) => {
    if (req.bot) return res.send(req.bot);
    // TODO: filter and limit
    return Bot.find({}, (e, bots) => {
      if (e) return next(e);
      return res.send(bots);
    });
  },
  save: (req, res, next) => {
    const { name, url, secret } = req.body;
    let bot = req.bot;
    bot = Object.assign(bot, { name, url, secret });
    bot.save((e) => {
      if (e) {
        if (e.name === 'ValidationError') {
          const badRequest = new praeter.errors.BadRequest();
          badRequest.fields = Object.create(e.errors);
          return next(badRequest);
        }
        return next(e);
      }
      return res.send(bot);
    });
  },
};
