module.exports = (grunt) ->
  grunt.config "concat",
    concat:
      dest: "public/assets/js/scripts.js",
      src: ["source/js/validation.js", "source/js/app.js", "source/js/anchor.min.js"]

  grunt.loadNpmTasks 'grunt-contrib-concat'
