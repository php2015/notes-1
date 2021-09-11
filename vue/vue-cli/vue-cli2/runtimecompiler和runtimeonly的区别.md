#### runtimecompiler

```js
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

template -> ast(抽象语法树) ->  render -> 虚拟DOM -> UI(真实DOM)



#### runtimeonly

```js
new Vue({
  el: '#app',
  render: h => h(App)
})
```

render -> 虚拟DOM -> UI(真实DOM)



#### createElement函数的使用

**h就是createElement函数**

**三种用法**

```js
h其实就是createElement函数
语法：createElement(要替换条#app的元素, 新元素属性的一个对象, 新元素内容的一个数组)

比如
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
写成
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: createElement => createElement('h3', { class: '.box' }, ['hello world']) // 1. 传一个元素
})
那么页面显示的就不是模板了 只有hello world
页面就只有这个内容了 <h3 class="box">hello world</h3>


render函数还可以这么用 
render: createElement => createElement('h3', { class: '.box' }, ['hello world',createElement('button',['按钮'])]) 
// 2. 传一个元素 元素里面还有元素
那页面出来就是这样 <h3 class="box">hello world<button>按钮</button></h3>


const Kid = {
  template: `<div>
              <button>{{msg}}</button>
              <button>{{msg}}</button>
              <button>{{msg}}</button>
            </div>`,
  data() {
    return {
      msg: 'hello kimi'
    }
  }
}
render: createElement(Kid) // 3. 直接传一个组件 既然可以传组件那么久可以直接传App组件了
页面渲染出来的就是
<div>
  <button>hello kimi</button>
  <button>hello kimi</button>
  <button>hello kimi</button>
</div>

传组件时 例如App组件 传的其实不是组件 这个组件这时已经给转成一个对象了
因此里面没有任何template
谁把这个事情做了？webpack中安装vue loader同时还安装了vue-template-compiler
就是这个loader同时还安装了vue-template-compiler把App组件转成对象了
"vue-loader": "^13.3.0",
"vue-template-compiler": "^2.5.2",
如何证明？
在runtimeonly项目中main.js文件打印出App
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```



