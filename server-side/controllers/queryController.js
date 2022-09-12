const User = require('../models/User');
const Route = require('../models/RouteStart');
const TimeSlot = require('../models/TimeSlot');
const Bus = require('../models/Bus');
const Stoppage = require('../models/RouteStoppages');
const { StatusCodes } = require('http-status-codes');

const getPassengers = async (req, res) => {
	const { routeNo, timeSlot } = req.query;
	// console.log(req.routeNo);

	// first of all User has route number selected
	const passengersOfRoute = await User.find({ routeNo, timeSlot }).select(
		'-password'
	);

	res.status(StatusCodes.OK).json({ passengersOfRoute });
};

const getNumbersOfUsers = async (req, res) => {
	// const gp = getPassengers();
	const { routeNo, timeSlot } = req.query;
	const numberOfStudents = await User.find({
		routeNo,
		role: 'student',
	}).countDocuments();

	const numberOfStudentsFiltered = await User.find({
		// routeNo,
		timeSlot,
		role: 'student',
	}).countDocuments();

	const numberOfTeachers = await User.find({
		routeNo,

		role: 'teacher',
	}).countDocuments();

	const numberOfTeachersFiltered = await User.find({
		// routeNo,
		timeSlot,
		role: 'teacher',
	}).countDocuments();

	const numberOfStaffs = await User.find({
		routeNo,
		// timeSlot,
		role: 'staff',
	}).countDocuments();

	const numberOfStaffsFiltered = await User.find({
		// routeNo,
		timeSlot,
		role: 'staff',
	}).countDocuments();

	const usersCount = {
		numberOfStudents,
		numberOfTeachers,
		numberOfStudentsFiltered,
		numberOfTeachersFiltered,
		numberOfStaffs,
		numberOfStaffsFiltered,
	};

	if (numberOfStudentsFiltered >= numberOfStudents) {
		console.log(numberOfStudents);
	} else {
		console.log(numberOfStudents - numberOfStudentsFiltered);
	}

	if (numberOfTeachersFiltered >= numberOfTeachers) {
		numberOfStudents = numberOfStudents;
	} else {
		numberOfTeachers -= numberOfTeachersFiltered;
	}

	if (numberOfStaffsFiltered >= numberOfStaffs) {
		numberOfStudents = numberOfStudents;
	} else {
		numberOfStaffs -= numberOfStaffsFiltered;
	}
	// else if (Math.abs(numberOfStudentsFiltered - numberOfStudents))
	res.status(StatusCodes.OK).json({
		numberOfStudents,
		numberOfTeachers,
		numberOfStudentsFiltered,
		numberOfTeachersFiltered,
		numberOfStaffs,
		numberOfStaffsFiltered,
	});
};

// module.exports = { getPassengers, getNumbersOfUsers };
module.exports = { getPassengers, getNumbersOfUsers };
