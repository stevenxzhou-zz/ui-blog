/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Post header directive controller.
 */

define(function(require) {
	
	var postEditCtrl = require('/app/views/post-edit/post-edit.js');

	/**
	 * Controller for primary posts view.
	 * @param {!angular.Scope} $scope
	 * @param {!angular.$location} $location
	 * @param {!angular.ui.boostrap.$uibModal} uibModal
	 * @param {!blog.services.postPostService} postPostService
	 * @param {!blog.services.postDeleteService} postDeleteService
	 * @ngInject
	 * @construct
	 * @final
	 */
	var blogHeaderCtrl = function($uibModal, $location, postPostService, postDeleteService) {

		/**
		 * Hardcoded title here because it is not available from db.
		 * @const {string}
		 */
		this.title = "My Blog";

		/**
		 * Hardcoded description here because it is not available from db.
		 * @const {string}
		 */
		this.description = "This is a blog for Steven sharing thoughts and innovation ideas.";

		/**
		 * Hardcoded username here because it is not available from db.
		 * @const {string}
		 */
		this.username = "Steven";

		/**
		 * @private {!angular.ui.boostrap.$uibModal}
		 */
		this.uibModal_ = $uibModal;

		/**
		 * @private {!angular.$location}
		 */
		this.location_ = $location;

		/**
		 * @private {!blog.services.postPostService}
		 */
		this.postPostService_ = postPostService;

		/**
		 * @private {!blog.services.postDeleteService}
		 */
		this.postDeleteService_ = postDeleteService;

	};

 	/**
 	 * Pop up the modal dialog for posting a new post.
 	 * @export
 	 */
	blogHeaderCtrl.prototype.postNewDialog = function() { 
		this.uibModal_.open({
			animation: true,
			templateUrl: "/app/views/post-edit/post-edit.html",
			controller: postEditCtrl,
			controllerAs: 'postEditCtrl',
			resolve: {
				post: function() {
					return {};
				}
			},
			size: 'lg'
	    });
	};

 	/**
 	 * Delete all the posts.
 	 * @export
 	 */
	blogHeaderCtrl.prototype.deleteAll = function() { 
		this.postDeleteService_.deleteAll().then(function(data){
			this.location_.path("/app");
		}.bind(this));
	};

 	/**
 	 * Defination blog header angular directive module.
 	 * @export
 	 */
	var blogHeaderDirective = function() {
		return {
			restrict: 'E',
			controller: blogHeaderCtrl,
			controllerAs: 'blogHeaderCtrl',
			templateUrl: '/app/components/blog-header/blog-header.html',
			bindToController: true,
		}
	};

	return blogHeaderDirective;
});
