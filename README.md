# Apprentice.at

An online listing of apprenticeship opportunities.

## Environment Setup

To install and run the website you will need to download [Node](https://nodejs.org/en/download/) v12.

1. Clone the Repo `git clone git@github.com:sparkbox/apprentice-at.git`

2. Change Directory `cd apprentice-at`

3. Install Grunt `npm install -g grunt-cli`

4. Install Node Modules `npm ci`

5. Run `npm start` to start local development server

## Command Line Interface

- `grunt` Runs the default grunt task: `dev`.

- `grunt dev` Runs the `build` task to compile the static site in the `dist/` folder. Then it runs the `watch` task to check for updates to source files to automatically rebuild the site.

- `grunt build` runs a series of tasks to compile the static site. Runs:
  `assemble`, `sass`, `autoprefixer`, `concat`, and `copy:main` in that order.

- `grunt everything-clean` Runs the `clean:all` task to wipe out everything in `dist/` then runs `copy:main` to regenerate everything from `public/` into `dist/`.

- `grunt autoprefix` Update css files in `dist/css/` to include necessary browser prefixes.

- `grunt assemble` Generate static site templates into `dist/`.

- `grunt --watch` Watch for changes to files and run sass, autoprefixer, copy and assemble as needed. Livereload is enabled to refresh pages after changes are made.

- `grunt sass` Compile all sass files in the `scss/` folder into the `dist/css/` folder.

- `npm start` will run `grunt dev` & `npm serve` together

## Hosting

When `master` is updated, Netlify will rebuild and launch [apprentice.at](http://apprentice.at).
