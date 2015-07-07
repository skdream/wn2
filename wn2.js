var fis = module.exports = require('fis');

// 让 wn2 打头的先加载。
fis.require.prefixes.unshift('wn2');

fis.cli.name = 'wn2';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');
fis.cli.help.commands = ['init', 'install', 'release'];
fis.cli.version = require('./version.js');
fis.config.set('snailGames.json','https://raw.githubusercontent.com/snail-team/wn-data/master/snailGames.json');

// npm install -g fis-parser-sass
fis.config.merge({
	modules:{
		parser:{
			// less后缀的文件使用fis-parser-less插件编译
            // 处理器支持数组，或者逗号分隔的字符串配置
			less:['less'],
			sass : 'sass',
			scss : 'sass'

		},
		optimizer : {
            //js后缀文件会经过fis-optimizer-uglify-js插件的压缩优化
            js  : 'uglify-js',
            css : 'clean-css',
    		png : 'png-compressor'
        }
	},
	roadmap:{
		ext:{
			// less后缀的文件将输出为css后缀
            // 并且在parser之后的其他处理流程中被当做css文件处理
			less:'css',
			sass:'css',
			scss:'css'
		}
	}
});