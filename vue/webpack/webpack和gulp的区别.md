## webpack和gulp的区别


### 1. webpack和gulp/grunt的区别
```
gulp/grunt的核心是task 定义一系列task需要处理的任务（如ES6转ES5、sass转css等） 让整个流程自动化
所以gulp/grunt也被成为前端自动化任务管理工具 强调的是自动化


webpack是模块化打包工具 模块化是它的核心 文件压缩、预处理等是它的附带功能
```


### 2. 什么时候用gulp 什么时候用webpack
```
如果工程模块依赖简单 只需要简单的合并压缩等 用gulp就行
如果项目使用了模块化管理 而且相互依赖非常强 用webpack
```