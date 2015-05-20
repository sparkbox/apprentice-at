module.exports = (grunt) ->

  grunt.initConfig pkg: require("./package.json")

  ##### Tasks ######
  grunt.loadTasks "grunt"
  
  # CircleCI Continuous Deployment Task
  grunt.registerTask "ci", ["assemble", "sass", "autoprefixer"]

  # Clean Task
  grunt.registerTask "everything-clean", ["clean:all", "copy:main"]

  # Build Task
  grunt.registerTask "build", ["assemble", "sass", "autoprefixer", "copy:main", "watch"]
 
  # Default task
  grunt.registerTask "default", "build"