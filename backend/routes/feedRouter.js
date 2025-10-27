const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feedController');

router.get('/', feedController.getFeed);
router.post('/', feedController.createFeed);

module.exports = router;
