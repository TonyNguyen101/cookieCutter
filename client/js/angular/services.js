app.factory('Recipe', function () {
	var Recipe = {
		// title: "Chewie Chocolate Chip Cookies new",
		title: "",
		formVisible: false,		
		// _id: null,
		// images: ["http://s3.amazonaws.com/gmi-digital-library/2ea0aafc-2942-4134-947f-847c043411ae.jpg"], 
		images: [], 
		// description: "Crisp edges, chewy middles.", 
		description: "", 
		// TODO: sum up all action times to make totalTime
		totalTime: 30,
		score: 0,
		// user: "Tony Nguyen", 
		comments: [],	
		borrowers: [],
		allIngredients: [],
		vessels: [
		// {
		// 	vesselName: 'small mixing bowl',
		// 	formVisible: false,
		// 	description: "any bowl will do",
		// 	comments: [],
		// 	actions: [
		// 	{
		// 		actionName: "mix in",
		// 		formVisible: false,
		// 		time: 7,
		// 		description: "Slowly, one ingredient at a time",
		// 		comments: [],
		// 		ingredients: [
		// 		{
		// 			ingredientName: 'chocolate chips',
  //    			imperialQuantity: 4.5,
		// 			imperialUnits: "oz",
		// 			description: "You can also use chocloate chunks",
		// 			comments: []
		// 		},{
		// 			ingredientName: 'unsalted butter',
  //    			imperialQuantity: 4.5,
		// 			imperialUnits: "stick",
		// 			description: "organic prefered",
		// 			comments: []
		// 		}
		// 		]
		// 	}
		// 	]
		// },{
		// 	vesselName: 'large mixing bowl',
		// 	formVisible: false,
		// 	description: "can use an auto mixing bowl",
		// 	comments: [],
		// 	actions: [
		// 	{
		// 		actionName: "slowly mix in",
		// 		formVisible: false,
		// 		time: 10,
		// 		description: "You can use a auto mixer",
		// 		comments: [],
		// 		ingredients: [{
		// 			ingredientName: 'granulated sugar',	
  //    			imperialQuantity: 1.5,
		// 			imperialUnits: "cup",
		// 			description: "sifted",
		// 			comments: []
		// 		}]
		// 	},{ 
		// 		actionName: "blend in",
		// 		formVisible: false,
		// 		time: 20,
		// 		description: "use a whisk or wooden spoon",
		// 		comments: [],
		// 		ingredients: [{
		// 			ingredientName: 'all purpose flour',				
  //    			imperialQuantity: 2,
		// 			imperialUnits: "cup",
		// 			description: "be sure to use all purpose flour as compared to bread, cake, or self-rising",
		// 			comments: []
		// 		}]
		// 	}
		// 	]
		// }
		]
	};


	//Populate the recipes's allIngredients array
	// for (var i = 0; i < Recipe.vessels.length; i++) {
	// 	for (var j = 0; j < Recipe.vessels[i].actions.length; j++){
	// 		for (var k = 0; k < Recipe.vessels[i].actions[j].ingredients.length; k++){
	// 			Recipe.allIngredients.push(Recipe.vessels[i].actions[j].ingredients[k]);
	// 		}
	// 	}
	// }

	return Recipe;
});

app.factory('SimilarRecipes', function () {
	var SimilarRecipes = {};
	return SimilarRecipes;
});	
