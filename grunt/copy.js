/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = function(grunt) {
  grunt.config("copy", {
    main: {
      files: [{
        expand: true,
        cwd:'public/',
        src: ["**"],
        dest: "dist/"
      }
      ]
    }
  });

  return grunt.loadNpmTasks('grunt-contrib-copy');
};