module.exports = function (grunt){

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'stylesheets',
                    src: ['*.css', '!*.min.css'],
                    dest: 'stylesheets',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            build: {
                src: ['scripts/bower_components/angular/angular.min.js',
                      'scripts/bower_components/angular-ui-router/release/angular-ui-router.min.js',
                      'scripts/bower_components/angular-youtube-api-factory/dist/angular-youtube-api-factory.min.js',
                      'scripts/bower_components/lodash/dist/lodash.min.js',
                      'scripts/*.js'
                     ],
                dest: 'build/app.min.js'
            }
        },
        watch: {
            files: ['**/*'],
            tasks: ['default']
        },
        concat_css: {
            all: {
                src: ["stylesheet/*.min.css", 'scripts/bower_components/bootstrap/dist/css/bootstrap.min.css'],
                dest: "build/styles.min.css"
            }
        },
        'http-server': {
            'dev': {
                root: './',
                port: 8000,
                host: "0.0.0.0",
                showDir : true,
                autoIndex: true,
                ext: "html",
                runInBackground: false,
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', ['uglify', 'cssmin', 'concat_css']);
    grunt.registerTask('server', ['http-server:dev']);
};

