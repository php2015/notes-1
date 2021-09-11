#### router-link的属性及样式

##### 1. 属性 [to, tag, replace, active-class]
###### 1.1 to 
```html
<router-link to='/home'>HOME</router-link>
<router-link to='/about'>ABOUT</router-link>
```


###### 1.2 tag 渲染成什么标签
```html
<router-link to='/home' tag="button">HOME</router-link>
<router-link to='/about' tag="button">ABOUT</router-link>
```


###### 1.3 replace 点了不能返回（用了location.replaceState() 默认是location.pushState()）
```html
<router-link to='/home' tag="button" replace>HOME</router-link>
<router-link to='/about' tag="button" replace>ABOUT</router-link>
```


###### 1.4 active-class 觉得.router-link-active样式太长了 自定义一下
```html
<router-link to='/home' tag="button" replace active-class="active">HOME</router-link>
<router-link to='/about' tag="button" replace active-class="active">ABOUT</router-link>

但是这样每个router-link标签都要加太麻烦了
批量处理要去router文件夹的index.js修改

```


##### 2. 样式 [.router-link-active, .router-link-exact-active]
###### 2.1 .router-link-active
```
.router-link-active 第一层路由
激活的时候样式
但是通常不会修改 使用默认这个class即可


.router-link-exact-active 嵌套路由的样式
```
