const mongoose = require('mongoose');
const validator = require('validator');
const mongooseTypePhone = require('mongoose-type-phone');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: 'String',
		required: [true, 'Please provide name'],
		minlength: 4,
		maxlength: 50,
	},
	email: {
		type: 'String',
		unique: true,
		required: [true, 'email field is required'],
		validate: {
			validator: validator.isEmail,
			message: 'Please provide valid email',
		},
	},
	password: {
		type: 'String',
		required: [true, 'password field is required'],
		minlength: 6,
	},
	contacts: {
		type: mongoose.SchemaTypes.Phone,
		required: [true, 'Please provide your Phone number'],
	},
	role: {
		type: 'String',
		enum: ['student', 'teacher', 'staff', 'admin'],
		default: 'student',
	},
});

// before we wanna save the document, we need to hash the password
UserSchema.pre('save', async function () {
	// this.modifiedPaths()
	// this.isModified('name')
	if (!this.isModified('password')) return;

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model('User', UserSchema);
