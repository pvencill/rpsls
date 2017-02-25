/* eslint no-underscore-dangle:0 */
const express = require('express');
const TeamController = require('../controllers/teams');
const BotController = require('../controllers/bots');
const requiresMembership = require('../middleware/requires-membership');

const router = express.Router();

router.param('teamId', TeamController.find);
router.param('botId', BotController.find);

router.route('/teams/:teamId/bots/:botId')
  .delete(requiresMembership, TeamController.removeBot);

router.route('/teams/:teamId/bots')
  .post(requiresMembership, TeamController.addBot);

router.route('/teams/:teamId')
  .get(TeamController.list)
  .put(requiresMembership, TeamController.save)
  .delete(requiresMembership, TeamController.remove);

router.route('/teams')
  .get(TeamController.list)
  .post(TeamController.save);

module.exports = router;
