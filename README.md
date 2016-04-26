# Apprenticeship Web Project

A repository for the Sparkbox Apprentices to build the so-called Apprenticeship Marketplace.

* full stack web app
* revolves around apprenticeships and gathering apprentice data
* central repository for apprenticeship info

Releasable and sharable by tenth of June.

# Site Structure

* [Home](content/01-home.md)
* [Submit Apprenticeship](content/03-submit-apprenticeship.md)
* [By Apprentices for Apprentices](content/04-by-apprentices-for-apprentices.md)

## Environment Setup

To install and run the website you will need to download [Node](https://nodejs.org/download/).

1. Clone the Repo `git clone git@github.com:sparkbox/apprenticeship-web-project.git`

1. Change Directory `cd apprenticeship-web-project`

1. Install Grunt `npm install -g grunt-cli`

1. Install Node Modules `npm install`

## Command Line Interface

1. `grunt` Creates the `dist/` folder, and trigger default grunt tasks.

1. `grunt --watch` Watch for changes to files and run sass, autoprefixer, copy and assemble as needed. Livereload is enabled to refresh pages after changes are made.

1. `grunt sass` Compile all sass files in the `scss/` folder into the `dist/css/` folder.

1. `grunt autoprefix` Update css files in `dist/css/` to include necessary browser prefixes.

1. `grunt assemble` Generate static site templates into `dist/`.

1. `grunt everything-clean` Wipe out everything in dist/ and run grunt contrib copy to regenerate everything from public/ into dist/.

## Heroku

When `master` is updated the Heroku will rebuild and launch [apprentice.at](http://apprentice.at).

### Local Development

1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

1. Spin up a local development server `heroku local`.

1. Visit [localhost:5000](http://localhost:5000) in your browser.
