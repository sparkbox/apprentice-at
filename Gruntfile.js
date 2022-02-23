module.exports = function(grunt) {

  grunt.initConfig({pkg: require("./package.json")});

  //#### Tasks ######
  grunt.loadTasks("grunt");

  // Clean Task
  grunt.registerTask("everything-clean", ["clean:all", "copy:main"]);
};
