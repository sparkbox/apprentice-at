module.exports = (grunt) ->

  grunt.initConfig pkg: require("./package.json")

  ##### Tasks ######
  grunt.loadTasks "grunt"
  
  grunt.registerTask "build", ["assemble", "sass", "autoprefixer", "watch"]
 
  # Default task
  grunt.registerTask "default", "build"