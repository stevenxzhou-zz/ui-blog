/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Angular app module config file.
 */
 
define(function (require) {
	
	require('angular-route');
	require('angular-trix');
	require('angular-text-sanitize');
	require('angular-moment');
	require('angular-animate');
	require('angular-confirm');
	require('moment');
	require('ui-bootstrap');
	require('angular-toast');
	require('jQuery');

	var angular = require('angular');
	var viewMainCtrl = require('/app/views/main/main.js');
	var viewPostCtrl = require('/app/views/post/post.js');
	var postGetService = require('/app/services/post-get/post-get.js');
	var postPostService = require('/app/services/post-post/post-post.js');
	var postDeleteService = require('/app/services/post-delete/post-delete.js');
	var blogHeaderDirective = require('/app/components/blog-header/blog-header.js');

	/**
	 * Routes the application based on the url.
	 * @param {!angular.$routeProvider} $routeProvider
	 * @param {!angular.$locationProvider} $locationProvider
	 */
	var routeProvider = function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.when('/app', {
			controller: viewMainCtrl,
			controllerAs: 'mainCtrl',
			templateUrl: '/app/views/main/main.html',
		}).when('/app/post/:id?', {
			controller: viewPostCtrl,
			controllerAs: 'postCtrl',
			templateUrl: '/app/views/post/post.html'
		}).otherwise({
			redirectTo: '/'
		});
	};

	var blog = angular.module('blog', ['ngRoute', 
		'angularTrix', 'angularMoment', 'ngSanitize', 'ngToast', 'ngAnimate', 'ui.bootstrap', 'angular-confirm',
		postGetService.name, postPostService.name, postDeleteService.name, blogHeaderDirective.name]);

	blog.config(routeProvider);

});
