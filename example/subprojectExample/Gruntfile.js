'use strict';

module.exports = function(grunt) {

  require('../../lib/jit-grunt')(grunt).changeModulesRoot('subproject/node_modules');

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