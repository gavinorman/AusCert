angular.module('app.services')

	.service('$moment', function($window) {
		return $window.moment;
	})

;