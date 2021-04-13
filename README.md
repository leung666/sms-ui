# vue-web-template

- - -


##### 作者: liyunkun
##### 邮箱: liyunkun_11@163.com
##### 描述: web项目模板


- - -

## 项目技术

- vue2.0
- vuex
- vue-router
- axios
- element-ui
- nprogress
- moment
- babel-polyfill
- normalize
- vue-cli4.0

## src目录说明


| 文件夹 | 说明 | 备注 |
| --- | --- | --- |
| api | 全局接口 | 文件夹与文件名应与views里面的文件夹和文件对应 |
| assets | 全局静态文件 | css、img、js应分别对应存放 |
| components | 全局组件 | 文件名应采用驼峰写法，index.js已全局注册，无需单独注册 |
| filters | 全局过滤器 | 已在main.js里全局注册，新增直接在index.js里面新增即可 |
| router | 全局路由 | 路由都在index.js里面引入，新增路由分区请新建xx.routes.js文件 |
| sotre | 全局状态管理 | 根据自己需要修改 |
| utils | 全局工具包 | 根据自己的需要新增或修改 |
| views | 全局页面 | 根据自己的需要新增或修改，应根据页面进行分目录 |


## 环境说明

- development 本地开发环境
- test 测试环境
- production 正式环境

环境新增直接在根目录下新建.env.xxx文件，然后在package.json文件里面配置

## 项目命令

| 命令 | 描述 |
| --- | --- |
| npm run serve | 启动本地开发环境 |
| npm run test | 打包测试环境 |
| npm run build | 打包正式环境 |
