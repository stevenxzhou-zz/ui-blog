/**
 * Author: Steven Zhou
 * Date: 6-20-2016
 * Description: Post get service controller.
 */

define(function(require) {

	/*
	 * A angular service for getting posts.
	 * @param {!angular.$http} $http.
	 * @constuctor
     * @export
	 * @final
	 * @ngInject
	 * @struct
	 */
	var postGetService = function($http) {

		/*
		 * @private {!angular.$http}.
		 */
		this.http_ = $http;
	
		/*
		 * @private {Array.<Object>}.
		 */
		this.posts;
	};

	/**
	 * Delete a post by id and create a toast msg for success/failure.
	 * @export 
	 * @return {!angular.$http.promise}
	 */
	postGetService.prototype.getPostById = function(id) {
		var url = 'http://localhost:8080/Blog/api/' + id;
		return this.http_.get(url).then(function(response){
			var post = response.data.post;
			var localizedPost = this.localizePost(post);
			return localizedPost;
		}.bind(this));
	};

	/**
	 * Delete a post by id and create a toast msg for success/failure.
	 * @export 
	 * @return {!angular.$http.promise}
	 */
	postGetService.prototype.getAllPosts = function() {
		var url = 'http://localhost:8080/Blog/api/';
		return this.http_.get(url).then(function(response){
			var posts = response.data.blog.posts;
			var localizedPosts = this.localizePosts(posts);
			this.posts = localizedPosts;
			return localizedPosts;
		}.bind(this));
	};

	/**
	 * Delete a post by id and create a toast msg for success/failure.
	 * @export 
     * @return {!angular.$http.promise}
	 */
	postGetService.prototype.localizePosts = function(posts) {
		var localizedPosts = [];

		for (var i = 0; i < posts.length; i++) {
			var post = this.localizePost(posts[i]);
			localizedPosts.push(post);
		}

		return localizedPosts;
	};

	/**
	 * Delete a post by id and create a toast msg for success/failure.
	 * @export
	 * @return {Object} post with converted date.
	 */
	postGetService.prototype.localizePost = function(post) {
		var localizedPost = {};

		localizedPost['id'] = post.id;
		localizedPost['title'] = post.title;
		localizedPost['text'] = post.text;
		localizedPost['timestamp'] = new Date(post.timestamp);

		return localizedPost;
	};

	return postGetService;

});


