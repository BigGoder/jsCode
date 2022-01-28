# js
## throttle 好写
## debounce 难写
## babel 和webpack区别？  babel高版本向低版本的兼容，最后执行的是commonjs的标准   webpack是打包成浏览器认识的语言
## location pushState和replaceState,href的区别  ？  一个会强制刷新界面，一个不会
## target 和 currenttarget
## 作用域范围是定义时的范围而不是执行时的范围（牢记，方法包着方法的那种 闭包）
## 防抖节流
## 各种继承（原型，构造，组合，寄生）

# vue
## computed的实现 根据dirty是否为true来决定更新

# react
## Onclick 直接放进方法bind会造成性能问题


# webpack
## 编译babel
#### bebel转化为commonjs规范，但是浏览器还是不认识，此时需要webpack转化为浏览器认识的js代码块
## tree shaking工作原理（主要成功原因就是es6引入了静态导入）
## bundle和chunk  chunk是进行时  bundle由chunk产生
## loader
### style-loader css添加到内联标签style里面
### file-loader 文件路径转化为正确的绝对路径
### url-loader 处理图片的
### postcss-lader 把css转化为低版本，各种浏览器兼容的样式 
## plugins
### htmlwebpackplugins  打成html文件 并把js放入 copy-webpack-plugin 打包后引入外部链接
### cleanwebpackplugins 每次打包自动删除前面的包
### SplitChunksPlugin 代码分割分批加载
### mini-css-extract-plugin 把css打包到单独的模块而不是放在style里面


# css
## flex max-width > flex-basic > width
## flex:1 flex-grow=1 flex-shrink =1 flex-basic=0