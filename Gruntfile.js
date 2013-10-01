module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			posts: {
				src: ['src/*.html'],
				dest: 'build/posts.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default', ['concat']);
}
