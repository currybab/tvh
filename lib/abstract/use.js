module.exports = function (version, done) {
  'use strict';
  var async   = require('async');
  var fs      = require('fs');
  var dirname = require('../config/dirname');

  async.waterfall([function (callback) {
    var exists     = fs.existsSync(dirname.truffle);
    var list_files = [];

    if (!exists) fs.mkdirSync(dirname.truffle);

    list_files = fs.readdirSync(dirname.truffle);
    list_files = list_files.filter(function (element) {
      return (element.match(/^\./) === null);
    });

    var has = list_files.indexOf('v' + version);
    if (has === -1) {
      console.log('Version: ' + version + ' has not found.');
    } else {
      try {
        var lstat = fs.lstatSync(dirname.current);
        if (lstat.isSymbolicLink()) fs.unlinkSync(dirname.current);
      } catch (Exception) {}
      fs.symlinkSync(dirname.truffle + 'v' + version, dirname.current);
      // fs.chmodSync(dirname.truffle + 'v' + version + '/bin/tsc', '0755');
      console.log('Using v' + version);
    }
    callback(null);
  }, function (callback) {
    if (typeof done === 'function') done();
  }]);
};
