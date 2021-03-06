# webpackBaseScaffold
webpack3.6配置脚手架

## Why
有时候新建仓库,既想要系统化配置,又不想要vue-cli等重量级配置,所以自定义一套适用小项目的基础脚手架
## 开始
```
git clone https://github.com/zhuxudong/webpackBaseScaffold.git
npm install
```


## 开发
```
npm run dev
```

## 发布
```
npm run build
```
## 支持功能
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
* CSS浏览器兼容
* 抽离CSS文件
* TypeScript

## 配置
* 入口在src/app.js,/test,/static,/dist下面是测试文档,开发时可以删除
* build/webpack.config.js根据NODE_ENV变量来判断开发环境还是生产环境
* 默认只有生产环境进行代码压缩
* 默认开发/生产环境都进行图片压缩
* .browserslistrc进行兼容浏览器配置
* tsconfig.json 配置ts编译规则
