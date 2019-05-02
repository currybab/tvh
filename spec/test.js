(function () {
  'use strict';
  var assert = require('power-assert');
  var tvh    = require('../lib/tvh');
  var exec   = require('child_process').exec;
  var version = '5.0.14';
  var display = 'v' + version;

  describe('tvh', function() {
    this.timeout(15000);
    before(function(done) {
      console.log('TEST BEHAVIOR\n\n');
      tvh.clean(done);
    });

    it('install ' + version, function(done) {
      tvh.install(version, done);
    });

    it('show list', function(done) {
      exec('ls ./truffle', function(err, stdout, stderr) {
        var _version = stdout.replace('\n', '');
        assert.equal(display, _version);
        done();
      });
    });

    after(function(done) {
      tvh.clean(done);
    });
  });
}());
