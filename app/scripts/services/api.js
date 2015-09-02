angular.module('app.services')
    
    .constant('API_PRETEND', false)
    .constant('API_URL', 'http://deco3800-certcurity.uqcloud.net/api/')
    
    .service('$api', function($http, $q, $apiStatic, API_PRETEND, API_URL) {
        
        return {
            
            get: function(url) {
                if (API_PRETEND) {
                    if ($apiStatic.has(url))
                        return $q.when($apiStatic.get(url));
                    return $q.when({});
                }

                return $http.get(API_URL + url).then(function(response) {
                    return response.data;
                });
            },
            
            post: function(url, data) {
                if (API_PRETEND) {
                    return $q.when({});
                }

                return $http.post(API_URL + url, data).then(function(response) {
                    return response.data;
                });
            }
            
        };
    })

    .service('$apiStatic', function() {

        var data = {
            'request.php?method=currentthreats': [{"message":"Going to firebomb @ANZ branch tomorrow if they don't pick up the phone","name":"RationalHuman89","platform":"Twitter","url":"http:\/\/twitter.com\/rationalhuman89\/status\/604278477437554684"},{"message":"You are a DISGRACE! These interest rates are out of control! #BoycottWestpac #SendAMessage","name":"John Johnson","platform":"Facebook","url":"https:\/\/www.facebook.com\/Westpac\/posts\/10153376129922744"},{"message":"Really disappointed in @NAB, your online services have been offline for hours...","name":"Tweeterer2183","platform":"Twitter","url":"http:\/\/twitter.com\/tweeterer2183\/status\/484278477437565684"},{"message":"Operation bankrupture is a go! Current target: banking.anz.com.au, point your LOICs and fire","name":"Anonymous","platform":"8chan","url":"http:\/\/8ch.net\/b\/res\/49784564.html"}],
            'request.php?method=threatnum': [{"2015-01-01":201},{"2015-02-01":149},{"2015-03-01":274},{"2015-04-01":231},{"2015-05-01":304},{"2015-06-01":17}],
            'request.php?method=sentiment&platform=twitter&owner=1': 0.32191666666666696,
            'request.php?method=count&platform=twitter': 231355,
            'request.php?method=count&platform=facebook': 608,
            'request.php?method=count&platform=4chan': 830,
            'request.php?method=count&platform=8chan': 768
        };

        return {
            
            has: function(url) {
                return !!data[url];
            },

            get: function(url) {
                return data[url];
            }

        };

    })

;