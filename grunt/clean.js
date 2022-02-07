module.exports = function(grunt) {
  grunt.config("clean", {
  all: {
    src: "dist/*",
    dot: true
  }
}
  ); // clean hidden files as well

  return grunt.loadNpmTasks("grunt-contrib-clean");
};