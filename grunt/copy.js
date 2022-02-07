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