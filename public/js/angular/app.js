var app = angular.module("cookieCutter", ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/recipeApp/index.html',
			controller: 'RecipeApp'
		})
		// .when('/users/:usersId', {
		// 	templateUrl: 'partials/user.html',
		// 	controller: 'ShowController'
		// })
		.otherwise({
			redirectTo: '/'
		});
});