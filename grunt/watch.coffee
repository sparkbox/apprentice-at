module.exports = (grunt) ->
  grunt.config "watch",
  stylesheets:
    files: "scss/**/*"
    tasks: "sass:dev"

  partials:
    files: ["templates/**/*", "data/*"]
    tasks: ["assemble"]
    options:
      livereload: true

  livereload:
    files: "dist/css/*"
    options:
      livereload: true

  grunt.loadNpmTasks 'grunt-contrib-watch'