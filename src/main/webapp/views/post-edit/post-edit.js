/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Post edit modal controller.
 */

define(function (require) {
	'use strict';

	/**
	 * Controller for primary posts view.
	 * @param {!angular.rootScope} $rootScope
	 * @param {!angular.$http.$httpParamSerializerJQLike} $httpParamSerializerJQLike
	 * @param {!angular.ui.boostrap.$uibModal.$uibModalStack} uibModalStack
	 * @param {!angular.$location} $location
	 * @param {!blog.services.postGetService} postGetService
	 * @param {!blog.services.postPostService} postPostService
	 * @param {!blog.services.postDeleteService} postDeleteService
	 * @param {!Object} post
	 * @ngInject
	 * @construct
	 * @final
	 */
	var postEditCtrl = function($rootScope, $location, $httpParamSerializerJQLike, $uibModalStack, postGetService, postPostService, postDeleteService, post){
		
		/**
		 * @private {!blog.services.postGetService}
		 */
		this.rootScope_ = $rootScope;

		/**
		 * @private {!angular.$location}
		 */
		this.location_ = $location;

		/**
		 * @private {!angular.$http.$httpParamSerializerJQLike}
		 */
		this.httpParamSerializerJQLike_ = $httpParamSerializerJQLike;

		/**
		 * @private {!angular.ui.boostrap.$uibModal.$uibModalStack}
		 */
		this.uibModalStack_ = $uibModalStack;

		/**
		 * @private {!blog.services.postGetService}
		 */
		this.postGetService_ = postGetService;

		/**
		 * @private {!blog.services.postPostService}
		 */
		this.postPostService_ = postPostService;

		/**
		 * @private {!blog.services.postDeleteService}
		 */
		this.postDeleteService_ = postDeleteService;

		/**
		 * @export {!Object}
		 */
		this.post = angular.copy(post);
		
		this.init_();
	};

 	/**
 	 * Controller bootstrap function.
 	 * @private
 	 */
	postEditCtrl.prototype.init_ = function() {

		if (this.post.text == undefined){
			this.actionTitle = "New";
		} else {
			this.actionTitle = "Update";
		}
	};

	/**
 	 * Post or update a post.
 	 * @export
 	 */
	postEditCtrl.prototype.Post = function() {
		if (this.post.id == undefined) {
			this.PostNew();
		} else {
			this.UpdatePost();
		};
	}

	/**
 	 * Update a post.
 	 * @export
 	 */
	postEditCtrl.prototype.UpdatePost = function() {
		
		var id = this.post.id;
		var data = {'title': this.post.title, 'text': this.post.text};

		this.postPostService_.updateByPostId(id, this.httpParamSerializerJQLike_(data)).then(function(response){
			this.Cancel();
			// Trigger main page to update.
			this.postGetService_.getAllPosts();
			this.rootScope_.$broadcast('post-edit');
		}.bind(this));
	};

	/**
 	 * Dismiss a edit post dialog.
 	 * @export
 	 */
	postEditCtrl.prototype.Cancel = function() {
		this.uibModalStack_.dismissAll('Cancel');
	};

	/**
 	 * Post a new post.
 	 * @export
 	 */
	postEditCtrl.prototype.PostNew = function() {

		var data = {'title': this.post.title, 'text': this.post.text};

		this.postPostService_.postNew(this.httpParamSerializerJQLike_(data)).then(function(response){
			this.Cancel();
			// Trigger main page to update.
			this.postGetService_.getAllPosts();
			this.rootScope_.$broadcast('post-edit');
			this.location_.path("/app");
		}.bind(this));
	};
	
	return postEditCtrl;

});
