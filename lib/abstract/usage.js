module.exports = function (done) {
  'use strict';
  var async = require('async');

  async.waterfall([function (callback) {
    var message = '';

    message += 'Usage:\n';
    message += '    tvh usage                  Show this message\n';
    message += '    tvh list                   List installed versions\n';
    message += '    tvh list known             List registry versions\n';
    message += '    tvh install <version>      Install a version\n';
    message += '    tvh install latest         Install a latest version\n';
    message += '    tvh use <version>          Use <version>\n';
    message += '    tvh uninstall <version>    Uninstall a version\n';
    message += '    tvh clean                  Remove all source files\n';
    message += '\ne.g.\n';
    message += '    // Install a specific version number\n';
    message += '    tvh install 5.0.14\n';
    message += '    // Use a specific version number\n';
    message += '    tvh use v5.0.14\n';

    console.log(message);
    if (typeof done === 'function') done();
  }]);
};
