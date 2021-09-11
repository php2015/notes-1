## 移动端适配postcss-px-to-viewport

> https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md

### 小知识
```
一般设计图如果宽是750 比如iphone6
那么 图上是100px 写css的时候就要写50px 因为是2倍图
```


### 1. 安装
```javascript
npm install postcss-px-to-viewport --save-dev
```

### 2. 根目录新建postcss.config.js 写入以下 github一抄就有
```javascript
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/TabBar.vue/], // 排除TabBar组件 保持是像素
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}
```

### 3. 配置好后 调试屏幕宽度 页面等比例缩放 排除的不变