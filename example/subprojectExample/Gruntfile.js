'use strict';

module.exports = function(grunt) {

  require('../../jit-grunt')(grunt)({
    nodeModules: 'subproject/node_moduless'
  });

  grunt.initConfig({
    twigtojst: {
      twigs: {
        expand: true,
        cwd: 'Views/',
        src: [
          'test.html.twig',
        ],
        dest: '.tmp/',
        ext: '.html'
      },
    },
  });

  grunt.registerTask('default', ['twigtojst']);
};