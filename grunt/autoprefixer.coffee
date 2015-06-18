module.exports = (grunt) ->
  grunt.config "autoprefixer",
  files:
    src: 'dist/assets/css/style.css'
    dest: 'dist/assets/css/style.css'
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']

  grunt.loadNpmTasks 'grunt-autoprefixer'
