'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);


  // Define the configuration for all the tasks
  grunt.initConfig({

      // Watches files for changes and runs tasks based on the changed files
      watch: {
        styles: {
          files: ['less/{,*/}*.less'],
          tasks: ['less'],
          options: {
            spawn: false
          }
        }
    },

    // compile LESS files into style.css
    less: {
        development: {
            files: {
                'css/style.css': ['less/style.less']
            }
        }
    },



    //Add vendor prefixed styles
    postcss: {
      options: {
          processors: [
          require('autoprefixer')({browsers: ['last 5 version', 'ie 8', 'ie 9']})
        ]
      },
      dist: {
        files: [{
          expand: true,
          src: './css/style.css'
        }]
      }
    }

  });

  grunt.registerTask('start', [
    'less',
    'watch'
  ]);

  grunt.registerTask('build', [
    'less',
    'postcss',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);


};
