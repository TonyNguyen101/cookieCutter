var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	body: String,
	score: Number,
	user: {
	type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	recipe: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recipe"
	},
	vessel: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Vessel"
	},
	action: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Action"
	},
	ingredient: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Ingredient"
	}
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;