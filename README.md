# async_router_vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 路由权限

- 1.登录得到uid-->后端API ->路由权限API
- 2.后端返回-->用户对应路由权限列表-->前端-->JSON格式
- 3.JSON-->属性结构化
- 4.将树形结构化的数据渲染成-->vue 路由结构
- 5.根据路由结构动态生成-->静态路由结构
- 6.再将树形化的结构动态渲染到-->菜单组件中