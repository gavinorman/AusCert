module.exports = {
	
	scripts: {
		files: 'app/scripts/**/*.js',
		tasks: ['clean:scripts', 'jshint:dev', 'uglify:dev'],
		options: {
			livereload: true
		}
	},
	
	styles: {
		files: 'app/styles/**/*.less',
		tasks: ['clean:styles', 'less:dev'],
		options: {
			livereload: true
		}
	},
	
	partials: {
		files: 'app/partials/**/*.html',
		tasks: ['clean:partials', 'copy:partials'],
		options: {
			livereload: true
		}
	},
	
	fonts: {
		files: 'app/assets/fonts/**/*',
		tasks: ['clean:fonts', 'copy:fonts'],
		options: {
			livereload: true
		}
	},
	
	images: {
		files: 'app/assets/images/**/*',
		tasks: ['clean:images', 'copy:images'],
		options: {
			livereload: true
		}
	},
	
	index: {
    	files: 'app/index.html',
    	tasks: ['clean:index', 'copy:index'],
    	options: {
        	livereload: true
    	}
	},
	
	config: {
		files: [ 'Gruntfile.js', 'grunt/*.js' ],
		options: {
			reload: true
		}
	}
	
};