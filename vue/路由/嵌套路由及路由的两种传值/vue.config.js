module.exports = {
  //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "嵌套路由及路由的两种传值";
        return args;
      })
  }
};
