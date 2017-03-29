const router = require('express').Router();
const auth = require('./auth');
const bots = require('./bots');
const teams = require('./teams');
const simpleRandomPlayer = require('../controllers/sample-players').simpleRandom;

router.post('/players/simple', simpleRandomPlayer);
router.use(auth);
router.use(bots);
router.use(teams);

module.exports = router;
