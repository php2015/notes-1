## vue-cli2中如何给路径起别名


### 1. build文件夹的webpack.base.conf.js文件中设置alias
```javascript
module.exports = {
  // some code here..
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'views': resolve('src/views'),
    }
  },
}
```


### 2. 通过import引入的路径 直接写即可
```
比如App.vue中引入MainTabBar
import MainTabBar from "components/maintabbar/MainTabBar";

简单的还是使用相对路径即可
```


### 3. html里面和css里引入在暂时没有解决办法
```
亲测 ~@/assets 不行
```