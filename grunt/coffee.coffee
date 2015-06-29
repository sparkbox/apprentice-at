module.exports = (grunt) ->
  grunt.config "coffee",
    dev:
      options:
        bare: true
      src: ['source/js/**.coffee']
      dest: 'dist/assets/js/app.js'
    spec:
      options:
        bare: true
      src: ['source/js/spec/**.coffee']
      dest: 'dist/tests/spec/appSpec.js'

      
  #Load Tasks
  grunt.loadNpmTasks 'grunt-contrib-coffee'