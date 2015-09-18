app.factory('Recipe', function () {
	var Recipe = {
		title: "Chewie Chocolate Chip Cookies (test)",
		formVisible: false,
		author: "Tony Nguyen", 
		image: "http://s3.amazonaws.com/gmi-digital-library/2ea0aafc-2942-4134-947f-847c043411ae.jpg", 
		description: "Crisp edges, chewy middles.", 
		// TODO: sum up all action times to make totalTime
		totalTime: 30,
		score: 0,
		allIngredients: [],		
		vessels: [
		{
			vesselName: 'small mixing bowl',
			formVisible: false,
			actions: [{
				actionName: "mix in",
				formVisible: false,
				time: 7,
				ingredients: [{
					ingredientName: 'chocolate chips',
     			imperialQuantity: 4.5,
					imperialUnits: "oz",
					}, {
					ingredientName: 'butter',
     			imperialQuantity: 4.5,
					imperialUnits: "stick",
				}]
			}]
		},{
			vesselName: 'large mixing bowl',
			formVisible: false,
			actions: [{
				actionName: "slowly mix in",
				formVisible: false,
				time: 10,
				ingredients: [{
					ingredientName: 'sugar',	
     			imperialQuantity: 1.5,
					imperialUnits: "cup",
				}]
			},{ 
				actionName: "blend in",
				formVisible: false,
				time: 20,
				ingredients: [{
					ingredientName: 'flour',				
     			imperialQuantity: 2,
					imperialUnits: "cup",
				}]
			}]
		}
		]
	};
	return Recipe;
});