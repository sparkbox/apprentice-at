module.exports = (grunt) ->
  grunt.config "concat",
    concat:
      dest: "public/assets/js/scripts.js",
      src: "source/js/*.js"

  grunt.loadNpmTasks 'grunt-contrib-concat'
