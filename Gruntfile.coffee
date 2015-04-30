module.exports = (grunt) ->

  grunt.initConfig pkg: require("./package.json")

  ##### Tasks ######
  grunt.loadTasks "grunt"
 
  # Default task
  grunt.registerTask "default", ["sass", "assemble"]
