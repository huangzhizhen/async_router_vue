import axios from "axios";
import qs from 'qs'
function getUserRouters(uid){
  return axios({
    // 对应koa服务器下的请求
    url:'http://localhost:3000/user_router_auth',
    method:'post',
    header:{
      'Conten-type':'applicaton/x-wwww-form-urlencoded'
    },
    data:qs.stringify({uid})
  }).then((res)=>{
    // 拿到数据直接返回
    return res.data
  }).catch((err)=>{
    throw err;
  })
}
export {
  getUserRouters
}