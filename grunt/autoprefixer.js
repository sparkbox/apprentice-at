module.exports = function(grunt) {
  grunt.config("autoprefixer", {
  files: {
    src: 'dist/assets/css/style.css',
    dest: 'dist/assets/css/style.css',
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
  }
});

  return grunt.loadNpmTasks('grunt-autoprefixer');
};
