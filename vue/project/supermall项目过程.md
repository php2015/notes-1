## supermall项目过程

### 1. vue-cli3创建项目



### 2. 划分目录结构
```javascript
公共的组件放在components文件夹里
components文件夹分为common文件夹和content文件夹
其中common文件夹里面的组件在下个项目也可以使用
content文件夹放的是本项目公用的组件

src文件夹再新建一个common文件夹 放公共的js文件
```



### 3. 引入css文件 src/assets/css/

```javascript
base.css中引入normalize.css
App.vue中引入base.css
```



### 4. 配置alias  根目录新建vue.config.js 注意vue-cli3和vue-cli4配置别名的方式不一样 网上找就有

```javascript
const path = require('path');        //引入path模块

function resolve(dir) {
  return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('.src/assets'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('src/views'))
  }
}
```



### 5. 根目录新建文件.editorconfig（cli2有的 cli3没有这个文件） 里面怎么配置根据组里过去的风格即可

```javascript
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```



### 6. 引入MainTabBar 安装路由写好配置

```javascript
路径如果使用vue-cli4配置别名和vue-cli3不一样 网上找找就有
亲测css引入必须要加@ 如@import "~@/assets/css/tabbar/iconfont/iconfont.css";
如果vue是2.6或以上 插槽建议要改成v-slot
```



### 7. 改下favicon.ico

```javascript
coderwhy的github里spuermall项目下载下来public文件夹里就有该图标
public文件夹里的index.html的<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<%= BASE_URL %>就是动态获取当前路径里的favicon.ico的意思
```



### 8. NavBar组件封装



### 9. 主页的轮播图使用mint-ui

```
并且自己封装成HomeSwiper组件 使Home.vue看起来更简洁
```



### 10. 主页的recommend

```
也是自己封装一个组件HomeRecommend
```



### 11. 主页的feature



### 12. 主页的TabControl组件



### 13. 主页的请求主页的流行、新款、精选数据各第1页



### 14. 主页的GoodsList和GoodsListItem组件



### 15. 主页的选项卡功能



### 16. 主页的better-scroll的封装及使用



### 17. 主页的BackTop组件及其现实和隐藏



### 18. 主页的上拉加载更多



### 19. BScroll的图片加载防抖动



### 20. 加载时显示Indicator加载图标



### 21. 实现TabControl粘性定位效果



### 22. 让Home.vue组件keep-alive



### 23. 详情页加传iid



### 24. 详情页轮播图



### 25. 详情页基本信息



### 26. 详情页商家信息



