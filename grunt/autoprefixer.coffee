module.exports = (grunt) ->
  grunt.config "autoprefixer",
  dist:
    src: 'dist/assets/css/*.css'

  grunt.loadNpmTasks 'grunt-autoprefixer'
