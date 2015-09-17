var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
	ingredientName: String,
	type: {
		type: String,
		default: "ingredient" 
	},
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
	type: {
		type: String,
		default: "action" 
	},
	formVisible: {
		type: Boolean,
		default: false 
	},
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
	type: {
		type: String,
		default: "vessel" 
	},
	formVisible: {
		type: Boolean,
		default: false 
	},
	description: String,
	actions: [actionSchema],
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

var recipeSchema = new mongoose.Schema({
	title: String,
	type: {
		type: String,
		default: "recipe" 
	},
	formVisible: {
		type: Boolean,
		default: false 
	},
	image: [String],
	description: String,
	// Do I have to change this to a String to account for decmials and factions?
	totalTime: Number,
	score: Number,
	updatedDate: {
		type: Date,
		default: Date.now
	},
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