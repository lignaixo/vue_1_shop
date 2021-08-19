module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch")
    //删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件(彻底懒加载)
  },

  //配置客户端http代理跨域请求
  // devServer: {
  //   proxy: {
  //     '/api': {  //今后，当前项目中凡是以/api开头的请求都归当前代理服务器代为发送。
  //       target: `http://xzserver.applinzi.com`,//真实服务器地址
  //       changeOrigin: true, //是否跨域
  //       pathRewrite: {
  //         '^/api': '' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
  //       }
  //     }
  //   }
  // }
}