/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Register a post header directive as module.
 */

define(function(require) {
	'use strict';

	var angular = require('angular');	
	var blogHeaderDirective = require('./blog-header-directive.js');

	return angular.module('blog.components.blogHeaderDirective', []).directive('blogHeader', blogHeaderDirective);
});
