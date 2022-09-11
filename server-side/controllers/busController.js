const Bus = require('../models/Bus');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllBuses = async (req, res) => {
	const bus = await Bus.find();
	// console.log(req.body);
	res.status(StatusCodes.OK).json({ bus, count: bus.length });
};

// const getFiltered = async (req, res) => {
// 	const {
// 		// user: { userId },
// 		params: { id: busNo },
// 	} = req;
// 	// console.log(req.params);
// 	// console.log(userId);
// 	const bus = await Bus.find({
// 		busNo: busNo,
// 		// createdBy: userId,
// 	});

// 	if (!bus) {
// 		throw new NotFoundError(`No job with id ${busNo}`);
// 	}

// 	res.status(StatusCodes.OK).json({ bus });
// };

const updateBusInfo = async (req, res) => {
	const {
		body: {
			licenseNo,
			codeName,
			capacity,
			driverInfo: { name, contacts },
			isActive,
		},
		params: { id: busId },
	} = req;

	if (
		licenseNo === '' ||
		codeName === '' ||
		capacity === '' ||
		name === '' ||
		contacts === ''
	) {
		throw new BadRequestError(
			'License no, code name, capacity, name, contacts fields can not be empty'
		);
	}

	const bus = await Bus.findByIdAndUpdate(busId, req.body, {
		new: true,
		runValidators: true,
	});

	if (!bus) {
		throw new NotFoundError(`No job with id ${busId}`);
	}

	res.status(StatusCodes.OK).json({ bus });
};

const createBusInfo = async (req, res) => {
	// req.body.createdBy = req.user.userId;

	const bus = await Bus.create(req.body);
	res.status(StatusCodes.CREATED).json({ bus });
};

const deleteBus = async (req, res) => {
	const {
		params: { id: busId },
	} = req;

	// console.log(req.params);

	const bus = await Bus.findByIdAndRemove({
		_id: busId,
	});

	if (!bus) {
		throw new NotFoundError(`No bus with id ${busId}`);
	}

	res.status(StatusCodes.OK).send();
};

module.exports = {
	createBusInfo,
	updateBusInfo,
	getAllBuses,
	// getFiltered,
	deleteBus,
};
