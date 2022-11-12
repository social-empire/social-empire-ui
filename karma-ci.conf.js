// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      check: {
        global: {
          statements: 55,
          branches: 25,
          functions: 45,
          lines: 55,
        },
      },
      dir: require('path').join(__dirname, './coverage/social-empire-ui'),
      subdir: '.',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'cobertura', subdir: '.', file: 'cobertura-coverage.xml' },
        { type: 'lcovonly', subdir: '.', file: 'lcovonly.txt' },
        { type: 'text-summary', subdir: '.', file: 'summary.txt' },
      ],
    },
    junitReporter: {
      ouputDir: require('path').join(__dirname, './testresults/social-empire-ui'),
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserDisconnectTimeout: 240 * 1000,
    browserNoActivityTimeout: 240 * 1000,
    captureTimeout: 8 * 60 * 1000,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox', '--disable-extensions'],
    },
    singleRun: false,
    restartOnFileChange: true,
  });
};
