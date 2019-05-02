(function () {
  'use strict';
  var assert = require('assert');
  var tvh    = require('../lib/tvh');

  describe('tvh', function() {
    this.timeout(15000);
    before(function(done) {
      console.log('EMULATE TEST\n\n');
      tvh.clean(done);
    });

    it('show usage', function(done) {
      tvh.usage(done);
    });

    it('show list known', function(done) {
      tvh.list_known(done);
    });

    it('install 5.0.14', function(done) {
      tvh.install('5.0.14', done);
    });

    it('show list', function(done) {
      tvh.list(done);
    });

    it('use 5.0.14', function(done) {
      tvh.use('5.0.14', done);
    });

    it('show list for display current', function(done) {
      tvh.list(done);
    });

    it('uninstall 5.0.14', function(done) {
      tvh.uninstall('5.0.14', done);
    });

    it('show list check uninstall 5.0.14', function(done) {
      tvh.list(done);
    });

    after(function(done) {
      tvh.clean(done);
    });
  });
}());
