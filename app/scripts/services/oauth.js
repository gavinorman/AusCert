angular.module('app.services')
	
	.constant('OAUTH_PUBLIC_KEY', 'gVodH-6ZstnNGe_y4nkG_C8ziCs')

	.service('$oauth', function($q, localStorageService, OAUTH_PUBLIC_KEY) {
		OAuth.initialize(OAUTH_PUBLIC_KEY);

		return {
			getToken: function(service) {
				return localStorageService.get(service + '_token');
			},

			setToken: function(service, token) {
				return localStorageService.set(service + '_token', token);
			},

			isAuthenticated: function(service) {
				return !!this.getToken(service);
			},

			auth: function(service) {
				if (this.isAuthenticated(service)) {
					return $q.when(this.getToken(service));
				}

				var deferred = $q.defer();

				OAuth.popup(service).done(function(response) {
					this.setToken(service, response);
					deferred.resolve();
				}.bind(this)).fail(function(err) {
					deferred.reject(err);
				});

				return deferred.promise;
			},

			authTwitter: function() {
				return this.auth('twitter');
			},

			authFacebook: function() {
				return this.auth('facebook');
			}

			// continue adding integrations with other services here...
		};
	})

;