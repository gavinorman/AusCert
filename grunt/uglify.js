var jsFiles = [
	'app/scripts/**/*.js'
];

var jsVendorFiles = [
    'bower_components/jquery/dist/jquery.min.js',
	'bower_components/bootstrap/dist/js/bootstrap.min.js',
	'bower_components/angular/angular.min.js',
	'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
	'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
	'bower_components/oauth-js/dist/oauth.min.js',
	'bower_components/moment/min/moment.min.js'
];

module.exports = {
	
	dev: {
		options: {
    		mangle: false,
			sourceMap: true
		},
		files: {
			"public/js/app.min.js": jsFiles
		}
	},
	
	vendor: {
		options: {
			compress: true,
			sourceMap: true
		},
		files: {
			"public/js/vendor.min.js": jsVendorFiles
		}
	},
	
	build: {
		options: {
			compress: true,
			mangle: true
		},
		files: {
			"public/js/app.min.js": jsFiles,
			"public/js/vendor.min.js": jsVendorFiles
		}
	}
	
};