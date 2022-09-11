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
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Bus', BusSchema);

let stop = [{}];
