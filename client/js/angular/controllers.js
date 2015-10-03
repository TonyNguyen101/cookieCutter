app.controller('CreateController', ['$scope', '$location', '$http', 'Recipe', function ($scope, $location, $http, Recipe) {
  // Recipe Service
  $scope.Recipe = Recipe.recipe;
  $scope.recipeFormVisible = true;
  $scope.transitionFormVisible = false;
  $scope.tempIngredientBin = [];

	$scope.saveRecipe = function () {
		if ($scope.tempIngredientBin.length > 0) {
			alert("Looks like you still need to place an ingredient from your bin");
		} else if (!$scope.Recipe.title){
			alert("Can't publish a blank recipe");
		} else {
			$http.post('/api/recipes', $scope.Recipe)
			.then(function (returnedObject) {
				console.log(returnedObject.data.message);
				console.log(returnedObject.data._id);					
				if (returnedObject.data._id){
					$scope.Recipe._id = returnedObject.data._id;
				}
			}, function (error) {
				console.log(error);
			});
		}	
	};

	$scope.deleteRecipe = function () {
		$http.delete('/api/recipe/' + $scope.Recipe._id)
		.then(function (returnedObject) {
			console.log(returnedObject.data.message);
			$scope.startNewRecipe();
		}, function (error) {
			console.log(error);
			}
		);
	};

	$scope.startNewRecipe = function () {
		// I wrote a method in the service that doesn't erase the Recipe
		// Now i'm erasing the service using the service method and scope method 
		Recipe.startNewRecipe();
		$scope.Recipe = {	
			formVisible: false,		
			images: [], 
			score: 0,
			comments: [],	
			borrowers: [],
			allIngredients: [],
			vessels: []
		};
	};

  $scope.toggleForm = function () {
  	// Will say this is null. still works
  	var nodeData = this.$modelValue;
  	if (nodeData) {
  		nodeData.formVisible = !nodeData.formVisible;
  	}
  };

  $scope.toggleVesselForm = function () {
  	$scope.formVisible = !$scope.formVisible;
  };
  $scope.toggleRecipeForm = function () {
  	$scope.recipeFormVisible = !$scope.recipeFormVisible;
  };
  $scope.toggleTransitionForm = function () {
  	$scope.transitionFormVisible = !$scope.transitionFormVisible;
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
 	// $scope.newSubItem = function (scope) {
  //   console.log(scope);
  //   var nodeData = scope.$modelValue;
  //   nodeData.nodes.push({
  //     id: nodeData.id * 10 + nodeData.nodes.length,
  //     title: nodeData.title + '.' + (nodeData.nodes.length + 1),
  //     nodes: []
  //   });
  // };



  $scope.addVessel = function () {
  	if (this.newVessel.vesselName !== '') {
  		this.newVessel.formVisible = false;
  		this.newVessel.actions = [];
  		this.newVessel.comments = [];
			this.Recipe.vessels.push(this.newVessel);
  		this.newVessel = '';  		
  	}
  };
  $scope.addAction = function () {
   	if (this.newAction.actionName !== ''){
   		this.newAction.formVisible = false;
   		this.newAction.ingredients = [];
   		this.newAction.comments = [];
			this.vessel.actions.push(this.newAction);
  		this.newAction = '';  		
  	}
  };

  //Add ingredient in actions
  $scope.addIngredientToAction = function () {
  	if (this.newIngredient.ingredientName !== '' && this.newIngredient.imperialQuantity !== ''){
			this.newIngredient.comments = [];
			this.action.ingredients.push(this.newIngredient);
			$scope.Recipe.allIngredients.push(this.newIngredient);
  		this.newIngredient = '';  		
  	}
  };

	$scope.addIngredientToAllIngredients = function (newAllIngredient) {
		if (newAllIngredient.ingredientName !== '' && newAllIngredient.imperialQuantity !== ''){
			newAllIngredient.comments = [];
  		$scope.Recipe.allIngredients.push(newAllIngredient);
  		$scope.tempIngredientBin.push(newAllIngredient);
  		this.newAllIngredient = '';
  	}	
	};

}]);

app.controller('IndexController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
	$http.get("api/recipes")
		.success(function (response) {
			$scope.allRecipes = response;
		});

	$scope.showRecipe = function (oneRecipeId) {
		$location.path('/recipe/' + oneRecipeId);	
	};
}]);

app.controller('ShowController', ['$scope', '$location', '$http', '$routeParams', 'Recipe', function ($scope, $location, $http, $routeParams, Recipe) {
	var oneRecipeId = $routeParams.recipeId;
	$http.get("api/recipe/" + oneRecipeId)
		.success (function (response) {
			$scope.oneRecipe = response;	
			// TODO: replace all with search
			$http.get('api/recipes')
				.success (function (allRecipes) {
					$scope.allRecipes = allRecipes;
				});
		});

	$scope.goToEditPage = function () {
		Recipe.updateRecipe($scope.oneRecipe);
		$location.path('/create');
	};

	$scope.recipeRecipesSwitch = true;	
	$scope.showOneRecipe = function (anotherRecipeId) {
		$scope.allRecipes.forEach(function (recipe) {
			if (recipe._id === anotherRecipeId) {
				$scope.anotherRecipe = recipe;
				$scope.recipeRecipesSwitch = !$scope.recipeRecipesSwitch;
			}
		});	
	};

	$scope.backToAllRecipes = function () {
		if ($scope.anotherRecipe) {
			$scope.recipeRecipesSwitch = !$scope.recipeRecipesSwitch;			
		}
	};

	$scope.mainColumn = "col l12 m12 s12";
	$scope.ingredientsColumn = "col l5 m5 s12";
	$scope.guideColumn = "col l6 m6 s12 right";
	$scope.compareRecipe = false;

	$scope.narrowColumn = function () {
		// One recipe view
		if ($scope.compareRecipe === true) {
			$scope.mainColumn = "col l12 m12 s12";
			$scope.ingredientsColumn = "col l5 m5 s11";
			$scope.guideColumn = "col l6 m6 s11 right";
		// Two recipe comparison view
		} else { 
			$scope.mainColumn = "col l6 m6 s6";
			$scope.ingredientsColumn = "col l11 m11 s11";
			$scope.guideColumn = "col l11 m11 s11";
		}
		$scope.compareRecipe = !$scope.compareRecipe;
	};


}]);


