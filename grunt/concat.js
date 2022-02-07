module.exports = function(grunt) {
  grunt.config("concat", {
    concat: {
      dest: "public/assets/js/scripts.js",
      src: ["source/js/validation.js", "source/js/app.js", "source/js/anchor.min.js"]
    }
  });

  return grunt.loadNpmTasks('grunt-contrib-concat');
};
