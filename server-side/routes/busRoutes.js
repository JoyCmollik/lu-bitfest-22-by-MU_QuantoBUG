const express = require('express');
const router = express.Router();

const {
	createBusInfo,
	updateBusInfo,
	getAllBuses,
	// getFiltered,
	deleteBus,
} = require('../controllers/busController');

// router.put('/update/:id', updateBusInfo);
router.get('/get', getAllBuses);
router.post('/create', createBusInfo);
// router.get('/getFiltered/:id', getFiltered);
router.route('/update/:id').put(updateBusInfo);
router.delete('/delete/:id', deleteBus);

module.exports = router;
