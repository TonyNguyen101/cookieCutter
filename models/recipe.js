var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
	ingredientName: String,
	type: "ingredient",
	imperialQuantity: Number,
	imperialUnits: String,
	description: String,
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});


var actionSchema = new mongoose.Schema({
	actionName: String,
	type: "action",
	formVisible: Boolean,
	time: Number,
	description: String,
	ingredients: [ingredientSchema],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var vesselSchema = new mongoose.Schema({
	vesselName: String,
	type: "vessel",
	formVisible: Boolean,
	description: String,
	actions: [actionSchema],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var recipeSchema = new mongoose.Schema({
	title: String,
	type: "recipe",
	formVisible: Boolean,
	image: [String],
	description: String,
	// Do I have to change this to a String to account for decmials and factions?
	totalTime: Number,
	score: Number,
	allIngredients: [ingredientSchema],	
	vessels: [vesselSchema],
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;