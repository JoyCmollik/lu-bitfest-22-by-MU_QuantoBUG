const express = require('express');
const router = express.Router();

const {
	createRouteStoppages,
	updateRouteStoppages,
	getAllRouteStoppages,
	getFilteredStoppages,
	deleteRouteStoppages,
} = require('../controllers/routeStoppagesController');

router.route('/').get(getAllRouteStoppages).post(createRouteStoppages);
router
	.route('/:id')
	.get(getFilteredStoppages)
	.put(getFilteredStoppages)
	.delete(deleteRouteStoppages);

module.exports = router;
