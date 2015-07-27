var fis = module.exports = require('fis3');

// 让 wn2 打头的插件先加载。
fis.require.prefixes.unshift('wn2');

// 添加自定义命令
fis.cli.name = 'wn2';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.help.commands = ['init', 'install', 'release'];
fis.cli.version = require('./version.js');

fis.set('snailGameList','http://git.woniu.com:3600/woniu.com/snail-game-data/repository/archive.tar');

// 配置API：https://github.com/fex-team/fis3/blob/master/doc/docs/api/config-props.md#release

// 配置 属性：https://github.com/fex-team/fis3/blob/master/doc/docs/api/config.md


fis
  .match('*.{js,css,png}', {
    useHash: false
  })
  .match('_*.scss', {release: false})
  .match('*.rb',{release:false})
  .match('**/*.png', {
    optimizer: fis.plugin('png-compressor')
  })
  .match('**/*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
  })
   .match('!**/*.min.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: null
  })
  .match('**/*.scss', {
      parser: fis.plugin('sass'), //启用fis-parser-sass插件
      rExt: '.css'
  })
  .match('**/*.{css,scss}', {
      optimizer: fis.plugin('clean-css',{
       'keepBreaks': true
      }) // fis-optimizer-clean-css 插件进行压缩，已内置
  });

// 开发环境
fis
  .media('dev')
  .match('**', {
    useHash: false
  })
  .match('**/*.js', {
   optimizer: null
  })

// 内网
fis.media('qa')
  .match('*.{js,css,png}', {
    useHash: false
  })

// 专题生产环境
fis
  .media('actProd')
  .match('*.{js,css,png}', {
    useHash: true
  })
  .match('::package', { //基于页面的打包方式
    postpackager: fis.plugin('loader', {
      allInOne: true
    })
  })
  .match('css/**.css', {
    packTo: '/pkg/index_packed.css'
  })
  .match('js/**.js', {
    packTo: '/pkg/app_packed.js'
  })
  .match('js/lib/**.js', {
    packTo: '/pkg/lib_packed.js'
  });

// 官网生产环境

fis
  .media('siteProd')
  .match('*.{js,css,png}', {
    useHash: true
  })