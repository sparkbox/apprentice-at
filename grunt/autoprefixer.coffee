module.exports = (grunt) ->
  grunt.config "autoprefixer"

  files: 'dist/base.css':'dist/base.css'

  grunt.loadNpmTasks 'grunt-autoprefixer'