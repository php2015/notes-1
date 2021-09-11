## mint-ui swiper的样式修改


### 该组件的css里再加一个style标签 不要设置scoped属性
### 需要注册的是这里需要两个类优先级才够 并且.is-active要下载下边覆盖
```css
<style>
.detail-swiper .mint-swipe-indicators .mint-swipe-indicator {
  background: #fff;
  opacity: 0.8;
}

.detail-swiper .mint-swipe-indicators .is-active {
  background: var(--color-high-text);
  opacity: 1;
}
</style>

// 这里要加.mint-swipe-indicators这个样式是因为.is-active样式有两个 
// 需要是.mint-swipe-indicators里面的.is-active背景才有颜色 
// 不加的话图片的背景都是这个颜色了
```