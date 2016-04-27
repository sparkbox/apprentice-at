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

* `grunt` Runs the default grunt task: `dev`.

* `grunt dev` Runs the `build` task to compile the static site in the `dist/` folder. Then it runs the `watch` task to check for updates to source files to automatically rebuild the site.

* `grunt build` runs a series of tasks to compile the static site. Runs:
  `assemble`, `sass`, `autoprefixer`, `coffee`, `concat`, and `copy:main` in that order.

* `grunt everything-clean` Runs the `clean:all` task to wipe out everything in `dist/` then runs `copy:main` to regenerate everything from `public/` into `dist/`.

* `grunt autoprefix` Update css files in `dist/css/` to include necessary browser prefixes.

* `grunt assemble` Generate static site templates into `dist/`.

* `grunt --watch` Watch for changes to files and run sass, autoprefixer, copy and assemble as needed. Livereload is enabled to refresh pages after changes are made.

* `grunt sass` Compile all sass files in the `scss/` folder into the `dist/css/` folder.

## Heroku

When `master` is updated the Heroku will rebuild and launch [apprentice.at](http://apprentice.at).

### Local Development

1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

1. Run `grunt build` to compile the latest version of the static site. You can also run the default `grunt` task as a separate process to compile and watch the project as you develop.

1. Spin up a local development server `heroku local`.

1. Visit [localhost:5000](http://localhost:5000) in your browser.
