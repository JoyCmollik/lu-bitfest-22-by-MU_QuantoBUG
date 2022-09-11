const mongoose = require('mongoose');

const TimeSlotSchema = new mongoose.Schema(
	{
		routeNo: {
			type: [Number],
			default: 1,
		},
		busNo: {
			type: [Number],
			required: [true, 'Please provide the bus number'],
		},

		timeSlot: {
			type: String,
			required: [true, 'Please provide time slot'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);
