module.exports = {
  // publicPath: "/theband/",
  // assetsDir: "/theband/assets/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/common.sass"`
      }
    }
  }
}