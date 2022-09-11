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
			enum: ['a', 'b', 'c', 'd', 'e'],
			default: 'a',
		},

		department: {
			type: String,
			enum: [
				'cse',
				'eee',
				'civil',
				'architecture',
				'bba',
				'english',
				'law',
			],
			default: 'cse',
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
