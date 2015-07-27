#!/usr/bin/env node
var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var cli = new Liftoff({
  name: 'wn2', // 命令名字
  processTitle: 'wn2',
  moduleName: 'wn2',
  configName: 'fis-conf',

  // only js supported!
  extensions: {
    '.js': null
  }
});

cli.launch({
  cwd: argv.r || argv.root,
  configPath: argv.f || argv.file
}, function(env) {
  var fis;
  if (!env.modulePath) {
    fis = require('../');
  } else {
    fis = require(env.modulePath);
  }
  fis.set('localNPMFolder', path.join(env.cwd, 'node_modules/wn2'));
  //fis.set('localNPMFolder', path.join(env.cwd, 'node_modules/wn2'));
  fis.set('globalNPMFolder', path.dirname(__dirname));
  fis.cli.run(argv, env);
});