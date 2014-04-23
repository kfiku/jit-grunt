'use strict';

var exec = require('child_process').exec;

exec('cd example/subproject; npm install', function (error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});