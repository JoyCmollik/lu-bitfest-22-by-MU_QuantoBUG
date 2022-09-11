const RouteStoppages = require('../models/RouteStoppages');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllRoutes = async (req, res) => {
	const routes = await RouteStoppages.find();

	res.status(StatusCodes.OK).json({ routes, count: routes.length });
};

const getFiltered = async (req, res) => {
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

const updateRoute = async (req, res) => {
	const {
		body: {
			routeNo,
			startTime,
			startLocation: { label, latitude, longitude },
		},
		params: { id: routeId },
	} = req;

	if (
		routeNo === '' ||
		startTime === '' ||
		label === '' ||
		latitude === '' ||
		longitude === ''
	) {
		throw new BadRequestError(
			'Route No, start time, start location fields can not be empty'
		);
	}

	const routeStart = await RouteStoppages.findByIdAndUpdate(
		routeId,
		req.body,
		{
			new: true,
			runValidators: true,
		}
	);

	if (!routeStart) {
		throw new NotFoundError(`No job with id ${routeId}`);
		// throw new NotFoundError(`No job with id`);
	}

	res.status(StatusCodes.OK).json({ routeStart });
};

const createRoute = async (req, res) => {
	// req.body.createdBy = req.user.userId;

	const routeStart = await RouteStoppages.create(req.body);
	res.status(StatusCodes.CREATED).json({ routeStart });
};

// const deleteRoute = async (req, res) => {
// 	const {
// 		params: { id: routeId },
// 	} = req;

// 	console.log(req.params);

// 	const route = await Route.findByIdAndRemove({
// 		_id: routeId,
// 	});

// 	if (!route) {
// 		throw new NotFoundError(`No route with id ${routeId}`);
// 	}

// 	res.status(StatusCodes.OK).send();
// };

module.exports = {
	createRoute,
	updateRoute,
	getAllRoutes,
	getFiltered,
	// deleteRoute,
};
