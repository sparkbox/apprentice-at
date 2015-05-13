module.exports = (grunt) ->
  grunt.config "assemble",
    options:
      partials: "source/templates/partials/*"
      data: "source/data/*.yml"
      layoutdir: "source/templates/layouts/"
      layout: ['default.hbs']
    files:
      expand: true
      cwd: 'source/templates/pages'
      src: ['*.hbs']
      dest: 'dist/'

  grunt.loadNpmTasks 'assemble'
