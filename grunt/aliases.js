module.exports = {
	
	'default': ['dev', 'watch'],
	'dev': ['clean', 'copy', 'jshint:dev', 'uglify:dev', 'uglify:vendor', 'less:dev'],
	'build': ['clean', 'copy', 'uglify:build', 'uglify:vendor', 'less:build']
	
};