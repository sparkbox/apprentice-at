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

1. Clone the Repo
```$ git clone git@github.com:sparkbox/apprenticeship-web-project.git```

1. Change Directory
```$ cd apprenticeship-web-project```

1. Install Grunt
```$ npm install -g grunt-cli```

1. Install Node Modules
```$ npm install```

## Command Line Interface

1. Create ```dist/``` folder, and trigger default grunt tasks.
```$ grunt```

1. Watch for changes to files and run sass, autoprefixer, copy and assemble as needed. Livereload is enabled to refresh pages after changes are made.
```$ grunt --watch```

1. Compile all sass files in the ```scss/``` folder into the ```dist/css/``` folder.
```$ grunt sass```

1. Update css files in ```dist/css/``` to include necessary browser prefixes.
```$ grunt autoprefix```

1. Generate static site templates into ```dist/```.
```$ grunt assemble```
  
1. Wipe out everything in dist/ and run grunt contrib copy to regenerate everything from public/ into dist/.
```$ grunt everything-clean```

	

## Divshot CLI Documentation
1. Spin up a local development server at ```http://localhost:3474```.
```$ divshot server``` 
	
1. **Don’t do this**: Move your local development repo to divshot staging. This should be avoided, as Circle CI handles deployment to staging.
```$ divshot push staging```

1. Promote divshot environment from environment to environment.
```$ divshot promote [FROM_ENVIRONMENT] [TO_ENVIRONMENT]```
**Ex:** ```$ divshot promote staging production```

1. Revert an environment to a previous release
```$ divshot rollback [ENVIRONMENT]```
**Ex:** ```$ divshot rollback production```






