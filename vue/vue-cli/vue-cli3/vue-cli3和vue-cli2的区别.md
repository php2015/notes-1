## vue-cli3和vue-cli2的区别


### 区别 [初始化, webpack, 文件夹(3), main.js, vue ui]


### 1. 初始化
```javascript
初始化项目命令不同
vue-cli2: npm init webpack name
vue-cli3: vue create name
```


### 2. webpack
```javascript
vue-cli3是基于webpack4打造 vue-cli2还是webpack3
```


### 3. 文件夹
```javascript
1. vue-cli3设计原则是0配置 移除掉了根目录下的build和config文件夹
2. ue-cli3移除了static文件夹 新增了public文件夹 并且index.html移动到public中了 
   里面的文件原封不动复制到dist文件夹
3. vue-cli3项目创建完根目录默认有.git文件夹（隐藏的）
```


### 4. main.js
```javascript
main.js中没有挂载el:"#app" 是render:h=>h(App).$mount('#app') 
其实和el:'#app'区别不大 因为el:"#app"内部也是执行$mount('#app')
```

### 5. vue ui命令
```javascript
vue-cli3提供了vue ui命令 提供了可视化配置 更加人性化
```
