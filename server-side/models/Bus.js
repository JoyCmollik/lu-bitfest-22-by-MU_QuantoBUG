const mongoose = require('mongoose');
const mongooseTypePhone = require('mongoose-type-phone');

const BusSchema = new mongoose.Schema(
	{
		licenseNo: {
			type: String,
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
			},

			contacts: {
				type: mongoose.SchemaTypes.Phone,
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
