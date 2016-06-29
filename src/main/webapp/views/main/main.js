<!-- 
/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Controller for main section with lists of posts.
 */
-->

define(function(require) {

	var postEditCtrl = require('/app/views/post-edit/post-edit.js');
	
	/**
	 * Controller for primary posts view.
	 * @param {!angular.Scope} $scope
	 * @param {!angular.Scope} $scope
	 * @param {!angular.ui.boostrap.$uibModal} uibModal
	 * @param {!blog.services.postGetService} postGetService
	 * @param {!blog.services.postDeleteService} postDeleteService
	 */
	var mainCtrl = function($scope, $uibModal, postGetService, postDeleteService) {

		/**
		 * Hardcoded blog title here because username is not available from db.
		 * @export {string}
		 */
		this.title = "My Blog";
		
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
		 * @private {!blog.services.postDeleteService}
		 */
		this.postDeleteService_ = postDeleteService;

		/**
		 * @private {!angular.ui.boostrap.$uibModal}
		 */
		this.uibModal_ = $uibModal;

		/*
		 * All posts.
		 * @export {Array.<Object>}
		 */
		this.posts;
		
		/*
		 * @export {number}
		 */
		this.currentPage = 0;

		/*
		 * @export {number}
		 */
		this.pageSize = 5;

		/*
		 * Temporay data structure to hold posts on current page.
		 * @export {Array}
		 */
		this.pageContent = [];
		
		this.init_();
		
		$scope.$on('post-edit', function(){
			this.init_();
		}.bind(this));
	};
 	
 	/**
 	 * Controller bootstrap function.
 	 * @private
 	 */
	mainCtrl.prototype.init_ = function() { 
		this.postGetService_.getAllPosts().then(function(data){
			this.posts = data;
			this.currentPage = 0;
			this.pageContent = this.posts.slice(0);
		}.bind(this));
	};

 	/**
 	 * Remove a post.
 	 * @export
 	 */
	mainCtrl.prototype.remove = function(id, index) { 
		this.postDeleteService_.deleteByPostId(id).then(function(data){
			this.posts.splice(index, 1);
			this.currentPage = 0;
			this.pageContent = this.posts.slice(0);
		}.bind(this));
	};

 	/**
 	 * Determin if posts list empty.
 	 * @export
 	 * @return {boolean} if posts list empty.
 	 */
	mainCtrl.prototype.hasPosts = function() {
		return this.posts != undefined && this.posts.length > 0;
	};

 	/**
 	 * Move to next avalable page.
 	 * @export
 	 */
	mainCtrl.prototype.pageNext = function() {
		console.log(this.currentPage);
		this.currentPage = this.currentPage + 1;
		var start = this.currentPage * this.pageSize;
		this.pageContent = this.posts.slice(start);
	};

 	/**
 	 * Move to prev avalable page.
 	 * @export
 	 */
	mainCtrl.prototype.pagePrev = function(){
		console.log(this.currentPage);
		this.currentPage = this.currentPage - 1;
		var start = this.currentPage * this.pageSize;
		this.pageContent = this.posts.slice(start);
	};

 	/**
 	 * Pop up a modal for editing the selected post.
 	 * @export
 	 */
	mainCtrl.prototype.postEditDialog = function(post) { 
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

	return mainCtrl;
});

