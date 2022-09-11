const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide your Full name'],
		},

		idNumber: {
			type: String,
			required: [true, 'Please provide your ID Number'],
		},

		batch: {
			type: Number,
			required: [true, 'Please provide your Batch Number'],
		},

		section: {
			type: String,
			required: [true, 'Please provide your Section'],
		},

		department: {
			type: String,
			required: [true, 'Please provide your Department name'],
		},

		deptCodeName: {
			type: String,
			required: [
				true,
				`Please provide Department's Code name. Example: CSE`,
			],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Student', StudentSchema);
