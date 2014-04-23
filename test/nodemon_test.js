'use strict';

var grunt = require('grunt');
var jit = require('../lib/jit-grunt')(grunt);

exports.jitGrunt = {
  changeModulesRoot: function(test) {
    jit.changeModulesRoot('example/subproject/node_modules');
    test.ok(jit.findPlugin('twigtojst'));
    jit.changeModulesRoot('node_modules');

    test.done();
  }
};
