const conf = require('./gulp.conf');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: true,
    autoWatch: false,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    browsers: [
      'Chrome'
    ],
    frameworks: [
      'jasmine'
    ],
    files: [
      'node_modules/es6-shim/es6-shim.js',
      conf.path.src('index.spec.js')
    ],
    preprocessors: {
      [conf.path.src('index.spec.js')]: [
        'webpack'
      ]
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    webpack: require('./webpack-test.conf'),
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-webpack')
    ]
  };
  if (process.env.TRAVIS) {
        configuration.browsers = ['PhantomJS'];
  }
  
  config.set(configuration);
};
