const express = require('express');
const router = express.Router();

const {
	createBusInfo,
	updateBusInfo,
	getAllBuses,
	// getFiltered,
	deleteBus,
} = require('../controllers/busController');

router.get('/get', getAllBuses);
router.post('/create', createBusInfo);
router.patch('/update/:id', updateBusInfo);
// router.get('/getFiltered/:id', getFiltered);
router.delete('/delete/:id', deleteBus);

module.exports = router;
