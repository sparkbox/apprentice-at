module.exports = (grunt) ->
  grunt.config "autoprefixer",
  files: 'dist/css/*':'dist/css/*'

  grunt.loadNpmTasks 'grunt-autoprefixer'