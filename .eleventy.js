const helpers = require('handlebars-helpers')();
module.exports = function(eleventyConfig) {
  eleventyConfig.addHandlebarsHelper('forEach', helpers.forEach)
  return {
    // configuration object for directories
    dir: {
      // Eleventy will look here for files to process
      input: 'source/templates/pages/index.hbs',
      // the built files will be placed here
      output: 'dist',
      // tells Eleventy where to look for layouts/partials
      includes: '../partials',
    },
  };
};
