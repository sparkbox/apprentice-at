module.exports = (grunt) ->
  grunt.config "watch",
  stylesheets:
    files: "scss/**/*"
    tasks: "sass:dev"
    options:
      livereload: true
  
  autoprefixer:
    files: 'dist/css/*':'dist/css/*'
    tasks: "autoprefixer"

  partials:
    files: ["templates/**/*", "data/*", "content/*"]
    tasks: "assemble"
    options:
      livereload: true

  grunt.loadNpmTasks 'grunt-contrib-watch'