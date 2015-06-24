module.exports = (grunt) ->
  grunt.config "coffee",
    coffee:
      src: ['source/js/**.coffee']
      dest: 'dist/assets/js/app.js'
      
  #Load Tasks
  grunt.loadNpmTasks 'grunt-contrib-coffee'