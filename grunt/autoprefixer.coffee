module.exports = (grunt) ->
  grunt.config "autoprefixer",
  files:
    src: 'dist/assets/css/style.css'
    dest: 'dist/assets/css/style.css'

  grunt.loadNpmTasks 'grunt-autoprefixer'
