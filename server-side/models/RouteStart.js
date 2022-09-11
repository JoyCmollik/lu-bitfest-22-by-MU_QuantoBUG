const mongoose = require('mongoose');

const RouteStartSchema = new mongoose.Schema(
	{
		routeNo: {
			type: Number,
			enum: [1, 2, 3, 4],
			default: 1,
		},
		startLocation: {
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

		startTime: {
			type: String,
			required: [true, 'Please provide the starting time'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('RouteStart', RouteStartSchema);
