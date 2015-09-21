var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
	title: String,
	formVisible: {
		type: Boolean,
		default: false 
	},
	// Change img String to [String] to be able to add more images
	images: [String],
	description: String,
	// Do I have to change this to a String to account for decmials and factions?
	totalTime: { 
		type: Number,
		default: 0
	},
	score: { 
		type: Number,
		default: 0
	},
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
		ingredientName: String,
		imperialQuantity: Number,
		imperialUnits: String,
		description: String
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
			time: {
				type: Number,
				default: 0
			},
			description: String,
			comments: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment"
			}],
			// ingredients array
			ingredients: [{
				ingredientName: String,
				imperialQuantity: Number,
				imperialUnits: String,
				description: String,
				comments: [{
					type: mongoose.Schema.Types.ObjectId,
					ref: "Comment"
				}]
			}]
		}]	
	}]
});

var Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;