angular.module('app.services')
	
	.constant('TWITTER_CALLBACK_STATE', 'app.accounts')

	.service('$twitter', function($http, $state, $oauth, TWITTER_CALLBACK_STATE) {

		return {

			authorise: function() {
				console.log('$twitter.authorise()');
				console.log($oauth);
				$oauth.popup('twitter');

				// OAuth.getAccessToken().then(function(response) {
				// 	console.log(response);
				// });

				// return $http.post('http://api.twitter.com/oauth/reqest_token', { 'oauth_callback': $state.href(TWITTER_CALLBACK_STATE) }).success(function(response) {
				// 	console.log(response);
				// });
			}

		};

	})

;