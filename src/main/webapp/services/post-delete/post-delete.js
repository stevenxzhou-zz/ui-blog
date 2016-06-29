/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Register post delete service as module.
 */

define(function(require) {
   	'use strict';
   	var angular = require('angular');
  	var postDeleteService = require('./post-delete-service.js');

	return angular.module('blog.services.postDelete', []).service(
		'postDeleteService', postDeleteService);
});