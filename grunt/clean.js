module.exports = {
	
	scripts: {
		src: [
			'public/js/app.min.js',
			'public/js/app.min.js.map'
		]
	},
	
	styles: {
		src: [
			'public/css/app.min.css',
			'public/css/app.min.css.map'
		]
	},
	
	vendor: {
		src: [
			'public/js/vendor.min.js',
			'public/js/vendor.min.js.map'
		]
	},
	
	fonts: {
		src: [
			'public/fonts/**/*'
		]
	},
	
	images: {
		src: [
			'public/img/**/*'
		]
	},
	
	index: {
    	src: [
        	'public/index.html'
    	]
	},
	
	partials: {
    	src: [
        	'public/partials/**/*.html'
    	]
	}
	
};