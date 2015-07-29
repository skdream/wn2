# wn2
a web's scaffolding tool based on FIS

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