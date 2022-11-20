const router = require('koa-router')()
const users = require('../data/user');//存储用户所有用户数据id下对应的权限数据
const routers = require('../data/router');//路由数据
router.post('/user_router_auth', async (ctx, next) => {
  // 拿到前端进行该请求时候的参数，主要是uid
  const { uid } = ctx.request.body;
  // 当uid存在时
  if (uid) {
    //定义最后向前台返回最后的路由的容器
    let authRouterInfo = [];
    const userInfo = users.filter(user => user.id == uid)[0];//因为users是一个数组，所以拿返回的数组的第一项（最终过滤出来的项也只会有一个）比如:[2,3,4,5]
    // 
    userInfo.auth.map((rid) => {
      // 拿到该uid对应的role数组之后，然后去跟router下的每一项得到id进行遍历判断
      routers.map((router) => {
        //只有当role中的id与router下的id相等的时候，将该routerpush到authRouterInfo中
        if (router.id === rid) {
          authRouterInfo.push(router);
        }
      })
    })
    ctx.body = authRouterInfo;
  } else {
    next();
  }
})

module.exports = router
