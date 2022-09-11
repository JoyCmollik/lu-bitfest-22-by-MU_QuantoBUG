const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide your Full name'],
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
				`Please provide your Department's Code name. Example: CSE`,
			],
		},

		designation: {
			type: String,
			required: [true, 'Please provide your designation'],
		},
		routeNo: {
			type: Number,
			enum: [1, 2, 3, 4],
			default: 1,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Teacher', TeacherSchema);
