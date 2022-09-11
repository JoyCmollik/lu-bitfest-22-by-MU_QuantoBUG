const User = require('../models/User');
const Route = require('../models/RouteStart');
const TimeSlot = require('../models/TimeSlot');
const Bus = require('../models/Bus');
const Stoppage = require('../models/RouteStoppages');
const { StatusCodes } = require('http-status-codes');

const getPassengers = async (req, res) => {
    const { routeNo, timeSlot } = req.query;
    console.log(req.query);

    // first of all User has route number selected
    const passengersOfRoute = await User.find({ routeNo });

    res.status(StatusCodes.OK).send({passengersOfRoute});
}

const getNumbersOfUsers = async (req, res) => {
    const numberOfStudents = await User.find({role: 'student'}).countDocuments();
    const numberOfTeachers = await User.find({role: 'teacher'}).countDocuments();
    const numberOfStaffs = await User.find({role: 'staff'}).countDocuments();

    const usersCount = {
        numberOfStudents,
        numberOfTeachers,
        numberOfStaffs
    };

    res.status(StatusCodes.OK).json({...usersCount});
}

module.exports = { getPassengers, getNumbersOfUsers };