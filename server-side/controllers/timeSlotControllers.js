const TimeSlot = require('../models/TimeSlot');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const getAllTimeSlots = async (req, res) => {
	const timeSlots = await TimeSlot.find({});

	res.status(StatusCodes.OK).json({
		data: timeSlots,
		count: timeSlots.length,
	});
};

const getSingleTimeSlot = async (req, res) => {
	const { id } = req.params;

	const timeSlot = await TimeSlot.findById(id);
	if (!timeSlot) {
		throw new NotFoundError(`No job with id ${busId}`);
	}

	res.status(StatusCodes.OK).json({ timeSlot });
};

const createTimeSlot = async (req, res) => {
	const timeSlot = await TimeSlot.create(req.body);

	res.status(StatusCodes.OK).json({ timeSlot });
};

const updateTimeSlot = async (req, res) => {
	const { id } = req.params;

	const timeSlot = await TimeSlot.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!timeSlot) {
		throw new NotFoundError(`No job with id ${busId}`);
	}

	res.status(StatusCodes.CREATED).json({ timeSlot });
};

const deleteTimeSlot = async (req, res) => {
	const { id } = req.params;

	const timeSlot = await TimeSlot.findByIdAndRemove(id);

	if (!timeSlot) {
		throw new NotFoundError(`No job with id ${busId}`);
	}

	res.status(StatusCodes.OK).json({ msg: 'successfully deleted' });
};

module.exports = {
	getAllTimeSlots,
	getSingleTimeSlot,
	createTimeSlot,
	updateTimeSlot,
	deleteTimeSlot,
};
