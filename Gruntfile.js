/**
 * Created by ivanaleikin on 15/08/17.
 */
module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ["public/"]
                },
                files: {
                    'public/css/styles.css': 'public/less/styles.less'
                }
            }
        },
        watch: {
            css: {
                files: ['**/*.less'],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less','watch']);
};
