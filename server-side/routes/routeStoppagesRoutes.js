const express = require('express');
const router = express.Router();

const {
	createRouteStoppages,
	updateRouteStoppages,
	getAllRouteStoppages,
	getFilteredStoppages,
	deleteRouteStoppages,
} = require('../controllers/routeStoppagesController');

router.get('/get', getAllRouteStoppages);
router.post('/create', createRouteStoppages);
router.patch('/update/:id', updateRouteStoppages);
router.get('/getFiltered/:busRoute', getFilteredStoppages);
router.delete('/delete/:id', deleteRouteStoppages);

module.exports = router;
