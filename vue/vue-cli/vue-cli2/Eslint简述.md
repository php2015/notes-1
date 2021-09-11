## Eslint简述


### 作用：检查代码规范的
### [尾部逗号, 尾部分号, 底部新空行, 函数名和参数中间要有空格, 函数定义了就要调用]

### 举例1 
```javascript
ew Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})

这样就会把1个error: Unexpected trailing comma 
就是尾部template: '<App/>',的这个逗号不能加
```


### 举例2
```javascript
ew Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
这里最尾部没有一个新的空行 
也会报错：Newline required at end of file but not found
```


### 举例3
```javascript
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});

这样也会报错 尾部的分号不用加
报错信息：Extra semicolon
```

### 举例4
```javascript
function add() {
  const num = 100
  return num
}

这样会报两个错误
1. add和()中间要一个空格才规范 
错误信息为：Missing space before function parenttheses
2. 定义了函数没有调用也会报错
错误信息为：'add' is defined but never used
```


### 装了Eslint不想用了如何禁用？
```
config文件夹的index.js往下看找到useEslint: true,给它关了
```