# webpackBaseScaffold
webpack配置脚手架,我写她用来作为以后项目的初始模板,适用于SPA/MPA等场景

# 开始
```
git clone https://github.com/zhuxudong/webpackBaseScaffold.git
npm install
```

# 开发
```
npm run dev
```

# 发布
```
npm run build
```
# 支持功能
* 各种模块语法:commonJS,AMD,UMD,ES6模块
* ES新语法,如class 
* ES新API,如Promise
* less编译
* 根据模板自动生成HTML,并自动处理CSS,JS依赖关系
* 抽离公共模块到common.js
* 拷贝/static到生产环境
* 哈希命名,防止版本缓存
* 代码压缩
* 图片压缩(目前使用ImagePlugin)


# 配置
* 使用单配制文件方式，根据NODE_ENV变量来判断开发环境还是生产环境
* 默认只有生产环境进行代码压缩
* 默认开发/生产环境都进行图片压缩

