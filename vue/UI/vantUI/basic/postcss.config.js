module.exports = {
  plugins: {

    'postcss-pxtorem': {
      rootValue: 75, // 设置根元素字体大小。根据设计图设置，如果设计图是750，这里就写75
      propList: ['*'], // 可以更改从px到rem的属性
      // propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: ['vant-', '.my-'], // 过滤掉vant-开头的选择器（因为vantUI是vant开头的）。以.my-开头的选择器也过滤掉，因为有时某些元素我们是不希望把他转成rem
      exclude: /node_modules/i // 排除该目录下的所有文件
    },


    'autoprefixer': {
      overrideBrowserslist: [
        "Android >= 4.1",
        "iOS >= 8",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
        //'last 2 versions', // 所有主流浏览器最近2个版本
      ],
      // grid: true
    }


  },
};