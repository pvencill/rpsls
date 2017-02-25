const router = require('express').Router();
const auth = require('./auth');
const bots = require('./bots');
const teams = require('./teams');

router.use(auth);
router.use(bots);
router.use(teams);

module.exports = router;
