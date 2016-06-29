/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Register a post delete service as module.
 */

define(function(require) {
   	'use strict';

   	var angular = require('angular');
  	var postPostService = require('./post-post-service.js');

	return angular.module('blog.services.postPost', []).service(
		'postPostService', postPostService);
});