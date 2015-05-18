module.exports = (grunt) ->
  grunt.config "watch",
  stylesheets:
    files: "source/scss/**/*"
    tasks: "sass"
    options:
      livereload: true
  
  autoprefixer:
    files: 'dist/css/*':'dist/css/*'
    tasks: "autoprefixer"

  partials:
    files: ["source/templates/**/*", "source/data/*", "source/content/*"]
    tasks: "assemble"
    options:
      livereload: true

  grunt.loadNpmTasks 'grunt-contrib-watch'
