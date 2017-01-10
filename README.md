# Cassino Dashboard
[![Build Status](https://api.travis-ci.org/picheli20/cassino-dashboard.svg?branch=master)](http://travis-ci.org/picheli20/cassino-dashboard)
Base generated with [FountainJS](http://fountainjs.io/).

### Requirement Node 6+ && NPM 3+
Please check your version with the following command:
```
node --version && npm --version
```

##Dependencies

To run this project you need to have:

* NodeJS ([link](https://nodejs.org/))
* Gulp ([link](http://gulpjs.com/))


##Setup the project

1.Install the depedencies above.

2.Clone the project.
```
git clone https://github.com/picheli20/cassino-dashboard.git
```

3.Go into the project folder
```
cd cassino-dashboard
```

4.Install the gulp dependencies
```
npm install
```

## Tasks
#### Use NPM scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run serve` to launch a browser sync server on your source files
- `npm run serve:dist` to launch a server on your optimized application
- `npm run test` to launch your unit tests with Karma
- `npm run test:auto` to launch your unit tests with Karma in watch mode


#### Or Gulp tasks

If you have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global packages you can use equivalent:

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`

**If you don't have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global, you should have this error:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined
