# wn2
a web's scaffolding tool based on FIS3

蜗牛游戏官网项目自动化集成工具


该工具可以快速构建游戏官网前端项目，目前支持4中类型的模板。

开发完成后可以一键发布到测试环境或生产环境，发布的同时，生产环境自动压缩合并文件。


### 安装方法：

npm install -g cnpm

cnpm install -g wn2


### 使用方法：


1.初始化项目,选择项目模板。

wn2 init 


	项目类型:
	site // 官网模板
	m-site // 官网移动版模板
	special // 专题模板
	m-special // 专题移动版模板
	page // 单页面模板


2.发布项目

- wn2 release qa // 测试环境

- wn2 release actProd // 专题生产环境

- wn2 release siteProd // 官网生产环境



###  升级

Version 0.1.1      2015-11-10
* update sass parse plugin to node-sass;

Version 0.1.3      2016-03-30
* update fis3   to  version 3.3.21;

### 需要配置host列表

- 10.13.0.195 gitlab.woniu.com #需要加载这个站点的数据
- 10.17.0.58  production.woniu.com  #发布到生产环境 wn2 release actProd 
- 10.13.0.205 dev.woniu.com  #发布到测试环境 wn2 release  qa

### 蜗牛移动mobile.snail.com

站点相关的专题活动

- wn2 init

choose a domain:
   woniu.com
   snail.com (V)

 choose a template type: (Use arrow keys)
 m-mobile (蜗牛移动移动版专题)
 mobile （蜗牛移动pc版专题）



页面做完后：

- wn2 release qa 发布到内网
- wn2 release actProd 发布到公网

制作过程中：

- wn2 server start 启动本地调试服务,
- wn2 release -wL 可以实时监听刷新浏览器

