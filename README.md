# tvh

Truffle Version Helper.

## Badges
+ [![NPM Version](http://img.shields.io/npm/v/tvh.svg)](https://www.npmjs.org/package/tvh)
+ [![MIT LICENSE](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/currybab/tvh/blob/master/LICENSE)

## Install

Using npm.

    $ npm install -g tvh

Confirm.

    $ tvh usage

## Usage

    tvh usage                  Show this message
    tvh list                   List installed versions
    tvh list known             List registry versions
    tvh install <version>      Install a version
    tvh install latest         Install a latest version(not working yet)
    tvh use <version>          Use <version>
    tvh truffle                Use truffle
    tvh uninstall <version>    Uninstall a version
    tvh clean                  Remove all source files

## Example

Install.

    $ tvh install 5.0.14
    Searching...

    Done

Switch use version.

    $ tvh use 5.0.14
    Version 5.0.14

View all installed version list.

    $ tvh list
    v5.0.14


View Remote version.

    $ tvh list known
    Searching...

    v0.0.1
    v0.0.2
    v0.0.3
    v0.0.4
    v0.0.5
    v0.0.6
    v0.0.8
    v0.0.9
    v0.0.10
    v0.0.11
    v0.0.12
    v0.0.13
    v0.0.14
    v0.0.15
    v0.0.16
    ...

Uninstall.

    $ tvh uninstall 5.0.14

    Done

Update tvh.

    $ npm update -g tvh

Uninstall tvh.

    $ npm uninstall -g tvh

Use truffle.

    $ tvh truffle (option)

For ease of use.

    add `alias truffle='tvh truffle'` to your shell config.

