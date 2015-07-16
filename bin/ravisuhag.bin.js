#!/usr/bin/env node
var pkg = require('./package.json'),
	me = require('./data/me.json'),
	rs = require('./index.js');

var userArgs = process.argv.slice(2);
var subCommand = userArgs[0];


program
    .version(pkg.version);

program
    .command('info')
    .description('Ravi Suhag\'s info.')
    .action(function() {
        index.info();
    });