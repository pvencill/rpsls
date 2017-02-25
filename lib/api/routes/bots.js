/* eslint no-underscore-dangle:0 */
const express = require('express');
const BotController = require('../controllers/bots');
const requiresMembership = require('../middleware/requires-membership');

const router = express.Router();

router.param('botId', BotController.find);

router.route('/bots')
  .get(BotController.list);

router.route('/bots/:botId')
  .get(BotController.list)
  .put(requiresMembership, BotController.save);

module.exports = router;
