/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Post post service controller.
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
	 postPostService = function($http, ngToast) {
		
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
	 * Config http request header to enable sending object as form data. 
	 */
	var config = {
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	}

	/**
	 * Update a post and create a toast msg for success/failure.
	 * @export
	 * @return {!angular.$http.promise}
	 */
	postPostService.prototype.updateByPostId = function(id, data) {
		var url = 'http://localhost:8080/Blog/api/' + id;
		return this.http_.post(url, data, config).then(function(response){
			this.ngToast_.create("You just updated a post!");
		}.bind(this), function(response){
			this.ngToast_.create({className: 'warning', content: 'Update post failed!'});
		}.bind(this));
	};

	/**
	 * Post a post create a toast msg for success/failure.
	 * @export
	 * @return {!angular.$http.promise}
	 */
	postPostService.prototype.postNew = function(data) {
		var url = 'http://localhost:8080/Blog/api/';
		return this.http_.post(url, data, config).then(function(response){
			this.ngToast_.create("You just post a new post!");
		}.bind(this), function(response){
			this.ngToast_.create({className: 'warning', content: 'New post failed to create!'});
		}.bind(this));
	};

	return postPostService;

});


