var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,		 
	},
	password: {
		type: String,
		required: true
	},
	passwordHash: String,
	updated: {
		type: Date,
		default: Date.now
	},
	dateJoined: Date,
	userImage: String,
});

var User = mongoose.model("user", userSchema);

module.exports = User;

