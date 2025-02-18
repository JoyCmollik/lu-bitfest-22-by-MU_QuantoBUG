const mongoose = require('mongoose');

const RouteStoppagesSchema = new mongoose.Schema(
	{
		routeNo: {
			type: [Number],
			default: 1,
		},
		label: {
			type: String,
			required: [true, 'Please provide the starting location'],
		},
		latitude: {
			type: String,
			required: [true, 'Please provide the latitude'],
		},
		longitude: {
			type: String,
			required: [true, 'Please provide the longitude'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('BusStoppage', RouteStoppagesSchema);
