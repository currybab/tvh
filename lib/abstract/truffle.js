module.exports = function (option, done) {
    'use strict';
    var async         = require('async');
    var fs            = require('fs');
    var child_process = require('child_process');
    var dirname       = require('../config/dirname');
  
    async.waterfall([function (callback) {
      var exists        = fs.existsSync(dirname.current);
      if (!exists) {
        console.log('tvh use <version>');
        return;
      } else {
        callback(null);
      }
    }, function (callback) {
      var command = [dirname.current + '/build/cli.bundled.js'];
      if (option != null) command = command.concat(option.split(' '));
      
      var truffle = child_process.spawn('node', command, {
          stdio: [process.stdin, 'pipe', 'pipe']
      });
      truffle.stdout.on('data', (data) => {
        process.stdout.write(`${data}`);
      });
      
      truffle.stderr.on('data', (data) => {
        process.stderr.write(`${data}`);
      });
    
      truffle.on('close', () => {
        //truffle.stdin.end();
        if (typeof done === 'function') done();
      });
    }]);
  };