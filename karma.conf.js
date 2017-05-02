module.exports = (config) => {
  config.set({
    basePath: 'test/frontend',
    frameworks: [ 'mocha' ],
    files: [ '**/*.test.js' ],

    preprocessors: {
      "**/*.test.js": ["webpack"]
    },
    webpack: require("./webpack.config"),
    webpackMiddleware: {
      stats: "errors-only"
    },

    reporters: [ 'mocha' ],
    mochaReporter: { output: 'full' },
    browserConsoleLogOptions: {
      level: 'log', format: '%b %T: %m', terminal: true
    },
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true,
  })
}