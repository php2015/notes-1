## vue-cli2项目的文件夹介绍


### vue-cli2项目的文件夹介绍
```
1.  build文件夹和config文件夹都是关于webpack的配置
    config文件夹里的index.js的autoOpenBrowser: false,可以上设置默认在浏览器打开
    脚手架2默认vue版本是"vue": "^2.5.2"

2.  static文件夹放静态资源 打包后会原封不动复制到dist文件夹里 
    如果图片放到src文件夹打包时会根据limit生成base64或者直接放到dist 而放在static文件夹就是直接放过去dist
    该文件夹里的.gitkeep文件 不管static文件夹是否为空 都会把static文件夹的内容上传到服务器
    
3.  根目录下的.babelrc文件 
    是因为转es5时用的是"babel-preset-env": "^1.3.2", 因为要有.babelrc文件作相关的配置
    .babelrc文件的"browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
    意思是市场份额大于1%的浏览器才考虑 浏览器的最新两个版本才考虑 IE8或以下就不考虑了

4.  根目录下.editorconfig文件
    对项目代码做一些统一的代码规范
    root = true的时候才会对下面的代码进行解析
    该文件的insert_final_newline意思是 如果js代码时10行 保存后自动在默认再加一行空行 就是11行了

5.  根目录下.eslintignore文件 就是哪里的代码 eslint对其忽略

6.  根目录下.gitignore文件 就是哪些文件不需要上传到服务器

7.  根目录下.postcssrc.js文件 对css代码转化的配置 一般情况下不需要更改

8.  根目录下package-lock.json文件
    记录node_modules文件夹里的包安装的真实版本
    因为实际安装的包版本和package.json文件里的显示的版本可能会有少许出入
```


### 其他小知识点
```
node是c++开发的 里面有个核心是v8引擎

默认情况下 js会生成字节码 然后在浏览器上运行
v8引擎厉害在直接把js编译成二进制代码
```