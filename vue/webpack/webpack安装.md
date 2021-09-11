## webpack安装


### 1. 依赖node环境 因此需要先安装node node自带npm


### 2. 全局安装webpack
```
npm install webpack@3.6.0 -g
这里先使用webpack@3.6.0 因为VUE CLI2依赖该版本
webpack -v => 3.6.0
```


### 3. 局部安装webpack（后续才需要）
```
npm install webpack@3.6.0 --save-dev
--save--dev 开发时依赖 项目打包后不需要继续使用的
```