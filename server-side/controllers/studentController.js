const Student = require('../models/Student');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const createStudent = async (req, res) => {
	// req.body.createdBy = req.user.userId;
	const student = await Student.create(req.body);
	res.status(StatusCodes.CREATED).json({ student });
};

// const getInfo = async (req, res) =>{
//       const student = await Student.findOne({})
// }

module.exports = { createStudent };
