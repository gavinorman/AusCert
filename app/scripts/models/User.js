angular.module('app.models')
    
    .service('$user', function() {
        
        var user = function(config) {
            
            config = config || {};
            
        };
        
        user.prototype = {
            
            /**
             * Save user instance to local storage
             */
            save: function() {
                // localStorageService.set('user', this);
            }
            
        };
        
        return user;
        
    })
    
    .factory('User', function($q, $http, $user) {
        
        var user;
        
        var service = {
            
            /**
             * Get the current instance OR create a new instance of $user
             *
             * @return promise
             * @resolve user
             */
            get: function() {
                return service.init().then(function() {
                    return user;
                });
            },
            
            /**
             * Create a new instance of $user
             *
             * @param object config
             */
            create: function(config) {
                user = new $user(config);
            }
            
        };
        
        return service;
        
    })

;