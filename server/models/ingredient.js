var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
	ingredientName: String,
	imperialQuantity: Number,
	imperialUnits: String,
	description: String,
	recipes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recipe"
	}],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var Ingredient = mongoose.model("ingredient", ingredientSchema);

module.exports = Ingredient;