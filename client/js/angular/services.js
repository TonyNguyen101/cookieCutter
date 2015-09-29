app.factory('Recipe', function () {
	var Recipe = { 
		recipe:	{
			formVisible: false,		
			images: [], 
			score: 0,
			// user: "Tony Nguyen", 
			comments: [],	
			borrowers: [],
			allIngredients: [
			// {
			// 	ingredientName: 'all purpose flour',				
	 	// 		imperialQuantity: 2,
			// 	imperialUnits: "cup",
			// 	description: "be sure to use all purpose flour as compared to bread, cake, or self-rising",
			// 	comments: []
			// },{
			// 	ingredientName: 'chocolate chips',
	 	// 		imperialQuantity: 4.5,
			// 	imperialUnits: "oz",
			// 	description: "You can also use chocloate chunks",
			// 	comments: []
			// },{
			// 	ingredientName: 'unsalted butter',
	 	// 		imperialQuantity: 4.5,
			// 	imperialUnits: "stick",
			// 	description: "organic prefered",
			// 	comments: []
			// },{
			// 	ingredientName: 'granulated sugar',	
	 	// 		imperialQuantity: 1.5,
			// 	imperialUnits: "cup",
			// 	description: "sifted",
			// 	comments: []
			// }  
			],
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
			// 	vesselName: "transfer one by one",
			// 	description: "further details",
			// 	transition: true
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
		},
		updateRecipe: function (replacementRecipe) {
			Recipe.recipe = replacementRecipe;
		},
		//Doesn't work on the scope for some reason
		startNewRecipe: function () {
			delete Recipe.recipe;
			Recipe.recipe = {	
				formVisible: false,		
				images: [], 
				score: 0,
				comments: [],	
				borrowers: [],
				allIngredients: [],
				vessels: []
			};
		}
	};	
	return Recipe;
});

