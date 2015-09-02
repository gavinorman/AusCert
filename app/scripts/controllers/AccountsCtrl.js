var AccountsCtrl = function($scope, $oauth) {
	
	this.$oauth = $oauth;
	
	this.facebook = $oauth.isAuthenticated('facebook');
	this.twitter = $oauth.isAuthenticated('twitter');
	this.google = $oauth.isAuthenticated('google');
	this.fourChan = false;
	this.tumblr = $oauth.isAuthenticated('tumblr');
	this.instagram = $oauth.isAuthenticated('instagram');
	this.linkedIn = $oauth.isAuthenticated('linkedin');
	this.pinterest = false;
	this.reddit = false;
	this.pasteBin = false;
	
};

AccountsCtrl.prototype = {
	
	addFacebook: function() {
		this.$oauth.authFacebook().then(function() {
			this.facebook = true;
		}.bind(this));
	},
	
	addTwitter: function() {
		this.$oauth.authTwitter().then(function() {
			this.twitter = true;
		}.bind(this));
	},
	
	addGoogle: function() {
		// need to setup integration with oauth.io
	},

	addFourChan: function() {
		// need to setup api (doesn't support oauth.io)
	},

	addTumblr: function() {
		// need to setup integration with oauth.io
	},

	addInstagram: function() {
		// need to setup integration with oauth.io
	},

	addLinkedIn: function() {
		// need to setup integration with oauth.io
	},

	addPinterest: function() {
		// need to setup api (doesn't support oauth.io)
	},

	addReddit: function() {
		// need to setup api (doesn't support oauth.io)
	},

	addPasteBin: function() {
		// need to setup api (doesn't support oauth.io)
	}
	
};

angular.module('app.controllers').controller('AccountsCtrl', AccountsCtrl);