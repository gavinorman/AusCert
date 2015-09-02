angular.module('app')

    .config(function($locationProvider, $stateProvider, $urlRouterProvider) {
        
        $locationProvider.html5Mode(true);
        
        $stateProvider
        	
        	.state('app', {
	        	abstract: true,
	        	templateUrl: '/partials/app.html'
        	})
        	
            .state('app.accounts', {
                url: '/accounts',
                views: {
	                'app': {
		                templateUrl: '/partials/accounts.html',
		                controller: 'AccountsCtrl as ctrl'
	                }
                }
            })
            
            .state('app.retrieving-data', {
	            url: '/retrieving-data',
	            views: {
		            'app': {
			            templateUrl: '/partials/retrieving-data.html'
		            }
	            }
            })
            
            .state('app.dashboard', {
	            url: '/dashboard',
	            views: {
		            'app': {
			            templateUrl: '/partials/dashboard.html',
			            controller: 'DashboardCtrl as ctrl',
			            // resolve: {
    			        //     threat_timelapse: function($api) { return $api.get('request.php?method=threatnum'); },
    			        //     threat_sentiment: function($api) { return $api.get('request.php?method=sentiment&platform=twitter&owner=1'); }
			            // }
		            }
	            }
            })
            
            .state('app.trending-detail', {
	            url: '/dashboard/trending/:threat',
	            views: {
		            'app': {
			            templateUrl: '/partials/trending-detail.html',
			            controller: 'TrendingDetailCtrl as ctrl',
			            // resolve: {
			            // 	posts: function($api) { return $api.get('request.php?method=currentthreats'); }
			            // }
		            }
	            }
            })
        
        ;
        
        $urlRouterProvider.otherwise('/dashboard');
    })
;
