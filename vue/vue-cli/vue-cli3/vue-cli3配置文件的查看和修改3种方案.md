### vue-cli3配置文件的查看和修改3种方案


### 1. 启动配置服务器：vue ui
```javascript
在任意目录下命令行输入vue ui
回车后命令行能看到GUI 意思是graphical user interface图形用户界面
进入页面后 左上角选择Vue-Project-Manager 然后导入项目根目录文件夹
如果要安装依赖 点击左侧Dependencies 右上角有install dependency

点到左侧Configuration 往下看可以找到CSS settings默认只编译css文件
如果要用scss等可以Enable CSS Modules

点击左侧Tasks 可以让项目跑起来
```


### 2. node_modules文件夹里找
```javascript
方案2 node_modules\@vue\cli-service里面有webpack.config.js文件 这里就是webpack的配置
```


### 3. 根目录新建vue.config.js
```javascript
方案3 根目录下自行新建文件vue.config.js里面写入
module.exports = {

}
然后该文件里的配置会和node_modules里面的配置合并
```