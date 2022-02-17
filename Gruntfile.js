module.exports = function(grunt) {

  grunt.initConfig({pkg: require("./package.json")});

  //#### Tasks ######
  grunt.loadTasks("grunt");

  grunt.registerTask("build", ["autoprefixer"]);

  // CircleCI Continuous Deployment Task
  grunt.registerTask("ci", "build");

  // Build for production
  grunt.registerTask("dist", "build");

  // Clean Task
  grunt.registerTask("everything-clean", ["clean:all", "copy:main"]);

  // Build Task
  grunt.registerTask("dev", ["watch"]);

  // Default task
  return grunt.registerTask("default", "dev");
};
