#!/usr/bin/env node
var pkg = require('../package.json');
var	rs = require('../index.js');
var program = require('commander');

program
    .version(pkg.version);

program
    .command('info')
    .description('Ravi Suhag\'s info.')
    .action(function() {
        rs.info();
    });

program.parse(process.argv);