const praeter = require('praeter');

/* eslint no-underscore-dangle:0 */
module.exports = (req, res, next) => {
  // check if there's a bot
  const bot = req.bot;
  // check if there's a team
  const teamId = req.teamId;
  if (!teamId) return next(); // no team, no limit
  // make sure the user has access to the team
  const team = req.team;
  if (!team.members.some(member => member.employeeNumber === req.user.employeeNumber)) {
    return next(new praeter.errors.Unauthorized());
  }
  // make sure the bot belongs to the team
  if (!bot) return next();
  return team.bots.some(item => item._id === bot._id);
};
