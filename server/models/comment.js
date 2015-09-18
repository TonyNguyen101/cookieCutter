var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	body: String,
	score: {
		type: Number,
		default: 0
	},
	user: {
	type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	

// DO I NEED ALL of these references?
	recipe: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recipe"
	},
	

// or I just need the recipe reference
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