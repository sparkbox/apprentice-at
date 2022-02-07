module.exports = function(grunt) {
  grunt.config("assemble", {
    options: {
      plugins: 'assemble-contrib-permalinks',
      partials: "source/templates/partials/*",
      data: "source/data/*.yml",
      layoutdir: "source/templates/layouts/",
      layout: ['default.hbs'],
      assets: "dist/assets",
      permalinks: {
        preset: 'pretty'
      }
    },
    files: {
      expand: true,
      cwd: 'source/templates/pages',
      src: ['*.hbs'],
      dest: 'dist/',
      ext: '.html'
    }
  }
  );

  return grunt.loadNpmTasks('assemble');
};
