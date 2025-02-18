const express = require('express');
const router = express.Router();

const {
	// getPassengers,
	getPassengers,
	getNumbersOfUsers,
} = require('../controllers/queryController');

// router.route('/').get(getPassengers);
router.route('/get').get(getPassengers);
router.route('/usercount').get(getNumbersOfUsers);

module.exports = router;
