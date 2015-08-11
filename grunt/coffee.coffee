module.exports = (grunt) ->
  grunt.config "coffee",
    dev:
      options:
        bare: true
      src: ['source/coffee/**.coffee']
      dest: 'source/js/app.js'
    spec:
      options:
        bare: true
      src: ['source/coffee/spec/**.coffee']
      dest: 'public/tests/spec/appSpec.js'


  #Load Tasks
  grunt.loadNpmTasks 'grunt-contrib-coffee'
