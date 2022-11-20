import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/common.css'
import store from './store/index'
import {generateRouter} from './lib/util'


// 路由前卫
router.beforeEach(async (to,form,next)=>{
  if(!store.state.hasAuth){
    await store.dispatch('setUserRouters')
    //经过dispatch action中之后，在action中有commit将结果存入state中即userRouters
    //然后下面则是直接处理即可
    const newRoutes=generateRouter(store.state.userRouters);
    console.log('generateRouter',newRoutes)

    //newRoutes是经过generateRouter进行了格式化变成我们真正想要的路由tree
    //这时候可以使用router中的api将其添加到router中
    router.addRoutes(newRoutes)
    // 有了权限之后，用户点击其相对应的路由则放行
    next({path:to.path})
  }else{
    //无权限的情况下则不用去请求
    next()
  }
})
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
