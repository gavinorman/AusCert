var TrendingDetailCtrl = function($scope, $stateParams, posts) {
	
	this.trendingThreat = $stateParams.threat;
	this.posts = posts;
	
};

TrendingDetailCtrl.prototype = {
	
};

angular.module('app.controllers').controller('TrendingDetailCtrl', TrendingDetailCtrl);