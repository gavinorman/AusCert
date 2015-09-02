module.exports = {
	
	dev: {
		options: {
			sourceMap: true,
			sourceMapURL: 'app.min.css.map'
		},
		files: {
			"public/css/app.min.css": "app/styles/app.less"
		}
	},
	
	build: {
		options: {
			compress: true
		},
		files: {
			"public/css/app.min.css": "app/styles/app.less"
		}
	}
	
};