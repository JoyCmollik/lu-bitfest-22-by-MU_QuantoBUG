const RouteStoppages = require('../models/RouteStoppages');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllRouteStoppages = async (req, res) => {
	const routes = await RouteStoppages.find();

	res.status(StatusCodes.OK).json({ routes, count: routes.length });
};

const getFilteredStoppages = async (req, res) => {
	const {
		// user: { userId },
		params: { id: routeNo },
	} = req;
	// console.log(req.params);
	// console.log(userId);
	const route = await RouteStoppages.find({
		routeNo: routeNo,
		// createdBy: userId,
	});

	if (!route) {
		throw new NotFoundError(`No job with id ${routeNo}`);
	}

	res.status(StatusCodes.OK).json({ route });
};

const updateRouteStoppages = async (req, res) => {
	const { id } = req.params;

	// if (
	// 	routeNo === '' ||
	// 	startTime === '' ||
	// 	label === '' ||
	// 	latitude === '' ||
	// 	longitude === ''
	// ) {
	// 	throw new BadRequestError(
	// 		'Route No, start time, start location fields can not be empty'
	// 	);
	// }

	const routeStart = await RouteStoppages.findByIdAndUpdate(
		id,
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);

	if (!routeStart) {
		throw new NotFoundError(`No job with id ${routeId}`);
	}

	res.status(StatusCodes.OK).json({ routeStart });
};

const createRouteStoppages = async (req, res) => {
	// req.body.createdBy = req.user.userId;

	const routeStart = await RouteStoppages.create(req.body);
	res.status(StatusCodes.CREATED).json({ routeStart });
};

const deleteRouteStoppages = async (req, res) => {
	const {
		params: { id: routeId },
	} = req;

	console.log(req.params);

	const route = await RouteStoppages.findByIdAndRemove({
		_id: routeId,
	});

	if (!route) {
		throw new NotFoundError(`No route with id ${routeId}`);
	}

	res.status(StatusCodes.OK).send();
};

module.exports = {
	createRouteStoppages,
	updateRouteStoppages,
	getAllRouteStoppages,
	getFilteredStoppages,
	deleteRouteStoppages,
};
