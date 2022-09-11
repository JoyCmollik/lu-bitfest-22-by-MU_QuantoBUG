const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema(
	{
		licenseNo: {
			type: String,
			required: [true, 'Please provide the bus number'],
		},

		codeName: {
			type: String,
			required: [true, 'Please provide the code name'],
		},

		capacity: {
			type: Number,
			enum: [50, 60],
			default: 50,
		},

		driverInfo: {
			name: {
				type: String,
				required: [true, 'Please provide the bus driver name'],
			},

			contacts: {
				type: String,
				required: [true, 'Please provide the bus driver name'],
			},
		},

		isActive: {
			type: Boolean,
			enum: [true, false],
			default: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Bus', BusSchema);
