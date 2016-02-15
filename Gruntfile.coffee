module.exports = (grunt) ->

  grunt.initConfig pkg: require("./package.json")

  ##### Tasks ######
  grunt.loadTasks "grunt"

  grunt.registerTask "build", ["assemble", "sass", "autoprefixer", "coffee", "concat", "copy:main"]

  # CircleCI Continuous Deployment Task
  grunt.registerTask "ci", "build"

  # Build for production
  grunt.registerTask "dist", "build"

  # Clean Task
  grunt.registerTask "everything-clean", ["clean:all", "copy:main"]

  # Build Task
  grunt.registerTask "dev", ["build", "watch"]

  # Default task
  grunt.registerTask "default", "dev"
