## 介绍
- 基本后台布局 & node 模拟请求响应 & 环境变量
- webpack5 + vue3.x + vue-router4.x + antd + axios + eslint + prettier

## 参考资料
  ### 博客
  - [webpack 搭建 vue3 项目](https://www.jianshu.com/p/0605989c8b4e)

## 项目启动
  ```javascript
  // 前端
  - cnpm install 
  - npm start // 启动开发环境
  - npm run build // 生产环境打包
  - npm run lint // 代码格式及校验（具体可查看 .prettierrc.js .eslintrc.js 配置）
  // 启动 node 服务
  - cd node
  - cnpm install
  - npm run serve
  ```

## TODO
 * [ ] ~~兼容性~~
 * [x] Layout
 * [x] Router
 * [x] ESlint & Prettier
 * [x] Api