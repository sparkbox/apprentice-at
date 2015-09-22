module.exports = (grunt) ->
  grunt.config "coffee",
    dev: {
      options:
        bare: true
      expand: true,
      flatten: true,
      cwd: 'source/coffee',
      src: ['*.coffee'],
      dest: 'source/js',
      ext: '.js'
    }
    spec:
      options:
        bare: true
      src: ['source/coffee/spec/**.coffee']
      dest: 'public/tests/spec/appSpec.js'


  #Load Tasks
  grunt.loadNpmTasks 'grunt-contrib-coffee'
