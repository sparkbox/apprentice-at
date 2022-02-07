/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
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