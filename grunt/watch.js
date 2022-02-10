module.exports = function(grunt) {
  grunt.config("watch", {
  autoprefixer: {
    files: { 'dist/css/*':'dist/css/*'
  },
    tasks: "autoprefixer"
  },
  partials: {
    files: ["source/templates/**/*", "source/data/*"],
    tasks: "assemble",
    options: {
      livereload: true
    }
  },
  public: {
    files: [ "public/**/*" ],
    tasks: "copy:main"
  },
  js: {
    files: "source/js/**/*",
    tasks: "concat",
    options: {
      livereload: true
    }
  },
}
  );

  return grunt.loadNpmTasks('grunt-contrib-watch');
};
