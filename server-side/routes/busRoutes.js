const express = require('express');
const router = express.Router();

const {
	createRoute,
	updateRoute,
	getAllRoutes,
	getFiltered,
	// deleteRoute,
} = require('../controllers/routeStartController');

router.get('/get', getAllRoutes);
router.post('/create', createRoute);
router.patch('/update/:id', updateRoute);
router.get('/getFiltered/:id', getFiltered);
// router.get('/delete/:id', deleteRoute);

module.exports = router;
