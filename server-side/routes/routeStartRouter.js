const express = require('express');
const router = express.Router();

const {
	createBusInfo,
	updateBusInfo,
	getAllBuses,
	getFiltered,
	// deleteRoute,
} = require('../controllers/busController');

router.get('/get', getAllBuses);
router.post('/create', createBusInfo);
router.patch('/update/:id', updateBusInfo);
router.get('/getFiltered/:id', getFiltered);
// router.get('/delete/:id', deleteRoute);

module.exports = router;
