module.exports = {
	
	fonts: {
		expand: true,
		cwd: 'app/assets/fonts/',
		src: '**',
		dest: 'public/fonts/'
	},
	
	images: {
		expand: true,
		cwd: 'app/assets/images/',
		src: '**',
		dest: 'public/img/'
	},
	
	index: {
    	src: 'app/index.html',
    	dest: 'public/index.html'
	},
	
	partials: {
    	expand: true,
    	cwd: 'app/partials/',
    	src: '**',
    	dest: 'public/partials/'
	}
	
};