/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = function(grunt) {
  grunt.config("sass", {
  dev: {
    options: {
      sourceMap: true
    },
    files: [{
      expand: true, // Enable dynamic expansion.
      cwd: "source/scss/", // Src matches are relative to this path.
      src: ["**/*.scss"], // Actual pattern(s) to match.
      dest: "dist/assets/css/", // Destination path prefix.
      ext: ".css", // Dest filepaths will have this extension.
      extDot: "first"
    } // Extensions in filenames begin after the first dot
    ]
  }
});

  return grunt.loadNpmTasks("grunt-sass");
};
