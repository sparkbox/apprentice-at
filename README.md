# Apprentice.at

An online listing of apprenticeship opportunities.

## Environment Setup

To install and run the website you will need to download [Node](https://nodejs.org/en/download/) v16.

1. Clone the Repo `git clone git@github.com:sparkbox/apprentice-at.git`

2. Change Directory `cd apprentice-at`

3. Install Node Modules `npm ci`

4. Run `npm start` to start local development server

## Command Line Interface

- `clean:all` script to wipe out everything in `dist/`.

- `autoprefix` update css files in `dist/css/` to include necessary browser prefiexes. 

- `eleventy` generates static site demplates into `dist/`

- `sass:build` compiles all sass files in the `scss/` folder into the `dist/css/` folder. 

- `eleventy:watch`, `sass:watch` & `js:watch` watch for changes to files in the `.hbs`, `.scss` & `.js` files of our project. BrowserSync is used to refresh pages after changes are made. 

- `npm run build` runs a series of scripts to compile the static site in the `dist/` folder.
Runs: 
  `sass:build`, `copy:public`, `concat:js`, `eleventy` and `autoprefix` in that order. 

- `npm start` will run the scripts `build`, `sass:watch`, `eleventy:watch`, `js:watch` & `serve` together in parallel. 

## Hosting

When `master` is updated, Netlify will rebuild and launch [apprentice.at](http://apprentice.at).

