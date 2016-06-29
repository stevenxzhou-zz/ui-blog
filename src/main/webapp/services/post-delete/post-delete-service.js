/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Post delete service controller.
 */

define(function(require) {

	/*
	 * A angular service for deleting posts.
	 * @param {!angular.$http} $http.
	 * @param {!angular.ngToast} ngToast.
	 * @constuctor
     * @export
	 * @final
	 * @ngInject
	 * @struct
	 */
	postDeleteService = function($http, ngToast) {
		
		/*
		 * @private {!angular.$http}.
		 */
		this.http_ = $http;

		/*
		 * @private {!angular.ngToast}.
		 */
		this.ngToast_ = ngToast;

	};
	
	/**
	 * Delete a post by id and create a toast msg for success/failure.
	 * @export
	 * @return {!angular.$http.promise}
	 */
	postDeleteService.prototype.deleteByPostId = function(id) {
		var url = 'http://localhost:8080/Blog/api/' + id;
		return this.http_.delete(url).then(function(response){
			this.ngToast_.create('Post Deleted!');
		}.bind(this), function(response){
			this.ngToast_.create({className: 'warning', content: 'Post was not Deleted!'});
		}.bind(this));
	};

	/**
	 * Delete all posts and create a toast msg for success/failure.
	 * @export 
	 * @return {!angular.$http.promise}
	 */
	postDeleteService.prototype.deleteAll = function() {
		var url = 'http://localhost:8080/Blog/api/';
		return this.http_.delete(url).then(function(response){
			this.ngToast_.create('All posts deleted!');
		}.bind(this), function(response){
			this.ngToast_.create({className: 'warning', content: 'All posts were not deleted!'});
		}.bind(this));
	};

	return postDeleteService;

});


