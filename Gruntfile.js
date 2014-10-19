/*jslint node: true */
'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    globals: ['should'],
                    timeout: 10000,
                    ignoreLeaks: false,
                    ui: 'bdd',
                    reporter: 'spec',
                    require: ['should', 'coverage/blanket']
                },
                src: ['test/**/*.js']
            },
            'html-cov': {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.html'
                },
                src: ['test/**/*.js']
            },
            'travis-cov': {
                options: {
                    reporter: 'travis-cov'
                },
                src: ['test/**/*.js']
            },
            'lcov': {
                options:  {
                    reporter: 'mocha-lcov-reporter',
                    quiet: true,
                    captureFile: 'lcov.info'
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            express: {
                files: ['lib/**/*.js'],
                tasks: ['mochaTest']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Default task.
    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['mochaTest']);
};