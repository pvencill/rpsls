const express = require('express');
const passport = require('../../../config/passport');
const jwt = require('jsonwebtoken');
const config = require('../../../config');
const log = require('../../../log');
const Team = require('../models/team');

const router = express.Router();

router.post('/login', passport.authenticate('ldap', { session: false }), (req, res, next) => {
  Team.find({ 'members.employeeNumber': req.user.employeeNumber }).populate('bots').exec((e, teams) => {
    if (e) return next(e);
    req.user.teams = teams;
    const token = jwt.sign(req.user, config.secret, { expiresIn: `${config.expiry}m` });
    log.access(req.user.username);
    return res.send(token);
  });
});

router.use(passport.authenticate('jwt', { session: false }));

module.exports = router;
