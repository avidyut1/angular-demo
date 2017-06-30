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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concat-css');

    grunt.registerTask('default', ['uglify', 'cssmin', 'concat_css']);
};

