'use strict';
var argv = process.argv;
var tvh  = require('./tvh');
var updateNotifier = require('update-notifier');
var pkg = require(__dirname + '/../package.json');
updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify();

if(argv[2]) {
  switch (argv[2]) {
    case 'usage':
      if (argv.length === 3) {
        tvh.usage();
        break;
      }
    case 'list':
      if (argv.length === 3) {
        tvh.list();
        break;
      } else if (argv[3] === 'known') {
        tvh.list_known();
        break;
      }
    case 'install':
      if (argv.length === 4) {
        if (argv[3] === 'latest') {
          console.log('Not implemented yet!');
          console.log('Use "tvh list known" for version information.');
          // tvh.install_latest();
        } else {
          tvh.install(argv[3]);
        }
        break;
      }
    case 'uninstall':
      if (argv.length === 4) {
        tvh.uninstall(argv[3]);
        break;
      }
    case 'use':
      if (argv.length === 4) {
        tvh.use(argv[3]);
        break;
      }
    case 'truffle':
      tvh.truffle(argv.slice(3).join().replace(/\,/g, ' '));
      break;
    case 'clean':
      if (argv.length === 3) {
        tvh.clean();
        break;
      }
    default:
      var message = 'Unrecognized command line argument: ';
      message += argv[2];
      message += ' ( see: \'tvh usage\' )';
      console.log(message);
      break;
  }
} else {
  var message = '@see \'tvh usage\'\n';
  console.log(message);
}
