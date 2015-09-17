// var app = angular.module('testApp', ['ui.tree', 'ngRoute', 'ngAnimate']);

app.controller('RecipeApp', ['$scope', '$location', function ($scope, $location) {
  $scope.recipes = [{
		title: "Chewie Chocolate Chip Cookies",
		type: 'recipe', 
		formVisible: false,
		author: "Tony Nguyen", 
		image: "http://s3.amazonaws.com/gmi-digital-library/2ea0aafc-2942-4134-947f-847c043411ae.jpg", 
		description: "Crisp edges, chewy middles.", 
		// TODO: sum up all action times to make totalTime
		totalTime: 30,
		score: 0,
		allIngredients: [],		
		vessels: [
		// {
		// 	vesselName: 'small mixing bowl',
		// 	type: 'vessel',
		// 	formVisible: false,
		// 	actions: [{
		// 		actionName: "mix in",
		// 		type: 'action',
		// 		formVisible: false,
		// 		time: 7,
		// 		ingredients: [{
		// 			ingredientName: 'chocolate chips',
		// 			type: 'ingredient',
  //    			imperialQuantity: 4.5,
		// 			imperialUnits: "oz",
		// 			}, {
		// 			ingredientName: 'butter',
		// 			type: 'ingredient',
  //    			imperialQuantity: 4.5,
		// 			imperialUnits: "stick",
		// 		}]
		// 	}]
		// },{
		// 	vesselName: 'large mixing bowl',
		// 	type: 'vessel',
		// 	formVisible: false,
		// 	actions: [{
		// 		actionName: "slowly mix in",
		// 		type: 'action',
		// 		formVisible: false,
		// 		time: 10,
		// 		ingredients: [{
		// 			ingredientName: 'sugar',
		// 			type: 'ingredient',					
  //    			imperialQuantity: 1.5,
		// 			imperialUnits: "cup",
		// 		}]
		// 	},{ 
		// 		actionName: "blend in",
		// 		type: 'action',
		// 		formVisible: false,
		// 		time: 20,
		// 		ingredients: [{
		// 			ingredientName: 'flour',
		// 			type: 'ingredient',					
  //    			imperialQuantity: 2,
		// 			imperialUnits: "cup",
		// 		}]
		// 	}]
		// }
		]
	}];

	//Populate the recipes's allIngredients array
	for (var i = 0; i < $scope.recipes[0].vessels.length; i++) {
		for (var j = 0; j < $scope.recipes[0].vessels[i].actions.length; j++){
			for (var k = 0; k < $scope.recipes[0].vessels[i].actions[j].ingredients.length; k++){
				$scope.recipes[0].allIngredients.push($scope.recipes[0].vessels[i].actions[j].ingredients[k]);
			}
		}
	}

  $scope.toggleForm = function (scope) {
  	var nodeData = scope.$modelValue;
  	if (nodeData) {
  		nodeData.formVisible = !nodeData.formVisible;
  	}
  };

  $scope.toggleVesselForm = function () {
  	$scope.formVisible = !$scope.formVisible;
  };

	$scope.movementOptions = {
		accept: function (sourceNodeScope, destNodeScope, destIndex) {
			var srcType = sourceNodeScope.$element.attr('data-type');
			var dstType = destNodeScope.$element.attr('data-type');
			// console.log("From: " + srcType + " To: " + dstType);
			if ((srcType === "action" && dstType === "vessel") || 
				(srcType === "ingredient" && dstType === "action") || 
				(srcType === "vessel" && dstType === "recipe") ){
				return true;
			} else {
				return false;
			}
		},
		onSort: function (evt){
    	console.log("something sorted!" + evt);
    } 
	};

	// Steal node ID format
 	$scope.newSubItem = function (scope) {
    console.log(scope);
    var nodeData = scope.$modelValue;
    nodeData.nodes.push({
      id: nodeData.id * 10 + nodeData.nodes.length,
      title: nodeData.title + '.' + (nodeData.nodes.length + 1),
      nodes: []
    });
  };

  $scope.addVessel = function () {
  	if (this.newVessel.vesselName !== '' && this.newVessel.time !== '') {
  		this.newVessel.type = 'vessel';
  		this.formVisible = false;
  		this.newVessel.actions = [];
			this.recipes[0].vessels.push(this.newVessel);
  		this.newVessel = '';  		
  	}
  };
  $scope.addAction = function () {
   	if (this.newAction.actionName !== ''){
   		this.newAction.type = 'action';
   		this.formVisible = false;
   		this.newAction.ingredients = [];
			this.vessel.actions.push(this.newAction);
  		this.newAction = '';  		
  	}
  };

  //Add ingredient in actions
  $scope.addIngredientToAction = function () {
  	if (this.newIngredient.ingredientName !== '' && this.newIngredient.imperialQuantity !== ''){
  		this.newIngredient.type = 'ingredient';
  		// TODO: make clone of new ingredient instance and add to ingredients on recipe scope
			this.action.ingredients.push(this.newIngredient);
			$scope.recipes[0].allIngredients.push(this.newIngredient);
  		this.newIngredient = '';  		
  	}
  };

	$scope.addIngredientToAllIngredients = function (newAllIngredient) {
		console.log(newAllIngredient);
		console.log(this.newIngredient);
		if (newAllIngredient.ingredientName !== '' && newAllIngredient.imperialQuantity !== ''){
  		newAllIngredient.type = 'ingredient';
  		this.recipes[0].allIngredients.push(newAllIngredient);
  		// TODO: make clone of new ingredient instance and add to ingredients on recipe scope
  		this.newIngredient = '';
  	}	
	};

  // $scope.vesselConfig = {
  //     group: { name: 'vesselGroup', pull: true, put: true },
  //     animation: 50,
  //     ghostClass: "sortable-ghost", 
  //     onSort: function (evt){
  //     	console.log("something sorted!" + evt);
  //     }
  // };
  // $scope.actionConfig = {
  //     group: { name: 'actionGroup', pull: true, put: true },
  //     animation: 50,
  //     ghostClass: "sortable-ghost", 
  //     onSort: function (evt){
  //     	console.log("vesselAction");
  //     }
  // };
  // $scope.ingredientConfig = {
  //     group: { name: 'ingredientGroup', pull: true, put: true },
  //     animation: 50,
  //     ghostClass: "sortable-ghost", 
  //     onSort: function (evt){
  //     	console.log("actionIngredient");
  //     }
  // };
}]);
