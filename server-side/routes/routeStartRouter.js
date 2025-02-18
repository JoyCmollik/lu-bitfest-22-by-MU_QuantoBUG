const express = require('express');
const router = express.Router();

const {
	createRoute,
	updateRoute,
	getAllRoutes,
	getSingleRoute,
	getFiltered,
	deleteRoute,
} = require('../controllers/routeStartController');
const { authenticateUser } = require('../middleware/authentication');

router.get('/get', getAllRoutes);
router.post('/create', createRoute);
router.get('/get/:id', getSingleRoute);
router.patch('/update/:id', updateRoute);
router.get('/getFiltered/:id', getFiltered);
router.delete('/delete/:id', deleteRoute);

module.exports = router;
