/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Register post get service as module.
 */

define(function(require) {
   	'use strict';

   	var angular = require('angular');
  	var postGetService = require('./post-get-service.js');

	return angular.module('blog.services.postGet', []).service(
		'postGetService', postGetService);
});