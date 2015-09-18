var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
	title: String,
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
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}],
	borrowers: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	}],
	// allIngredients Array w/ nested ingredients: for faster ingredient search
	allIngredients: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Ingredient"
		}],
	// vessels array	
	vessels: [{
		vesselName: String,
		formVisible: {
			type: Boolean,
			default: false 
		},
		description: String,
		comments: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}],
		// actions array
		actions: [{
			actionName: String,
			formVisible: {
				type: Boolean,
				default: false 
			},
			time: Number,
			description: String,
			comments: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment"
			}],
			// ingredients array
			ingredients: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Ingredient"
			}]
		}]	
	}]
});

var Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;