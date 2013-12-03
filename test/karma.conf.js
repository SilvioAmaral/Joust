// Karma configuration
// Generated on Mon Sep 02 2013 11:04:06 GMT-0400 (EDT)

module.exports = function(config) {

config.set({

    // base path, that will be used to resolve files and exclude
    basePath : '..',

    // Use jasmine
    frameworks : ["jasmine"],

    // list of files / patterns to load in the browser
    files : [
     'public/js/lib/angular/angular.js',
     'public/js/lib/angular/angular-resource.js',
     'public/js/lib/angular/angular-mocks.js',
     'public/js/app.js',
     'public/js/controllers/competitor.js',
     'public/js/controllers/tournament.js',
     'public/js/directives.js',
     'public/js/filters.js',
     'public/js/services.js',
      'test/public/**/*.js'
    ],


    // list of files to exclude
    exclude : [
      '**/*.swp'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters : ['progress'],


    // web server port
    port : 9876,

   // cli runner port
   runnerPort : 9100,

    // enable / disable colors in the output (reporters and logs)
    colors : true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel : 'karma.LOG_INFO',


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers : ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout : 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun : false

});
};
