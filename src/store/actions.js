import {getUserRouters} from '../request/index.js'
import {formatRouterTree} from '../lib/util'

export default{
  async setUserRouters({commit,state}){
    //根据用户登录之后的uid想后台请求路由数据
    const userRouters= await getUserRouters(state.uid)
    // 接下来将要处理这个router使得其变为树形结构
    const payload=formatRouterTree(userRouters)
    console.log('formatRouterTree',payload)
    //将格式化后的数据通知mutations进行更新
    commit('setUserRouter',payload)
    //有上面这个路由tree同时也说明有权限了
    commit('setAuth',true)
  }
}