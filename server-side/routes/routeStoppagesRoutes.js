const express = require('express');
const router = express.Router();

const {
	createRouteStoppages,
	updateRouteStoppages,
	getAllRouteStoppages,
	getSingleStoppage, 
	getFilteredStoppages,
	deleteRouteStoppages,
} = require('../controllers/routeStoppagesController');

router.route('/').get(getAllRouteStoppages).post(createRouteStoppages);
router.route('/get/:id', getSingleStoppage);
router
	.route('/:id')
	.get(getFilteredStoppages)
	.post(updateRouteStoppages)
	.delete(deleteRouteStoppages);

module.exports = router;
