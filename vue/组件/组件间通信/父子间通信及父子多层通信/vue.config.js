module.exports = {
  //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "父子间通信及父子多层通信";
        return args;
      })
  }
};
