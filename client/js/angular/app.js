var app = angular.module("cookieCutter", ['ui.tree', 'ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/index.html',
			controller: 'IndexController'
		})
		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'CreateController'
		})
		.when('/recipe/:recipeId', {
			templateUrl: 'views/show.html',
			controller: 'ShowController'
		})
		.otherwise({
			redirectTo: '/'
		});
});



// (function () {
//   'use strict';

//   angular.module('demoApp', ['ui.tree', 'ngRoute'])

//     .config(['$routeProvider', function ($routeProvider) {
//       $routeProvider
//         .when('/basic-example', {
//           controller: 'BasicExampleCtrl',
//           templateUrl: 'views/basic-example.html'
//         })
//         .when('/cloning', {
//           controller: 'CloningCtrl',
//           templateUrl: 'views/cloning.html'
//         })
//         .when('/connected-trees', {
//           controller: 'ConnectedTreesCtrl',
//           templateUrl: 'views/connected-trees.html'
//         })
//         .when('/filter-nodes', {
//           controller: 'FilterNodesCtrl',
//           templateUrl: 'views/filter-nodes.html'
//         })
//         .when('/nodrop', {
//           controller: 'BasicExampleCtrl',
//           templateUrl: 'views/nodrop.html'
//         })
//         .otherwise({
//           redirectTo: '/basic-example'
//         });
//     }]);
// })();
