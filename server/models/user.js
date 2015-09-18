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
	updatedDate: {
		type: Date,
		default: Date.now
	},
	dateJoined: Date,
	userImage: String,
	recipes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recipe"
	}],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var User = mongoose.model("user", userSchema);

module.exports = User;

