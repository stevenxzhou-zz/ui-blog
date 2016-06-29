/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Full post page controller.
 */

define(function(require) {
	
	var postEditCtrl = require('/app/views/post-edit/post-edit.js');

	/**
	 * Controller for single page post view.
	 * @param {!angular.$routeProvider.$routeParams} $routeParams
	 * @param {!angular.ui.boostrap.$uibModal} uibModal
	 * @param {!blog.services.postGetService} postGetService
	 * @ngInject
	 * @constructor
	 * @final
	 * @struct
	 */
	var postCtrl = function($routeParams, $uibModal, postGetService) {

		/**
		 * Hardcoded username here because username is not available from db.
		 * @export {string}
		 */
		this.username = "Steven";

		/**
		 * @private {!blog.services.postGetService}
		 */
		this.postGetService_ = postGetService;

		/**
		 * @private {!angular.$routeProvider.$routeParams} $routeParams
		 */
		this.routeParams_ = $routeParams;

		/**
		 * @private {!angular.ui.boostrap.$uibModal} uibModal
		 */
		this.uibModal_ = $uibModal;

	    /*
		 * Single post object.
		 * @export {!Object}
		 */
		this.post;

		this.init_();
	};

 	/**
 	 * Controller bootstrap function.
 	 * @private
 	 */
	postCtrl.prototype.init_ = function() { 
		var id = this.routeParams_['id'];
		this.postGetService_.getPostById(id).then(function(data){
			this.post = data;
		}.bind(this));
	};

 	/**
 	 * Pop up a modal for editing the selected post.
 	 * @export
 	 */
	postCtrl.prototype.postEditDialog = function(post) { 
		this.uibModal_.open({
			animation: true,
			templateUrl: "/app/views/post-edit/post-edit.html",
			controller: postEditCtrl,
			controllerAs: 'postEditCtrl',
			resolve: {
				post: function() {
					return post;
				}
			},
			size: 'lg'
	    });
	};

	return postCtrl;
});
