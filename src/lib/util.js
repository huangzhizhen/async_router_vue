
//将后端返回的扁平的结果格式化成树形结构的数据

 function formatRouterTree(data){
  let parants = data.filter(p=>p.pid==0),
      children = data.filter(p=>p.pid!==0)
      // 
  dataToTree(parants,children)   
  function dataToTree(parants,children){
    // 这里遍历父路由和子路由，对比pid与id
    parants.map((p)=>{
      children.map((c,i)=>{
        if(p.id===c.pid){
          // 则证明此时遍历的c则是p的子路由
          //这里需要再次递归，因为c下面可能还会有其子路由
          //先将children进行深拷贝一份
          let _c=JSON.parse(JSON.stringify(children))
          //由于c要做父级路由，所以要先将其删除，则_c里面就不会有我原本遍历的东西了
          _c.splice(i,1)//当当前的c删除
          // 将当前的c作为父级[c]然后与剩下的children作比较
          dataToTree([c],_c)
          // 若之前已经有添加过children项了，则直接而push
          if(p.children){
            p.children.push(c)
          }else {
            // 之前没有添加过，则直接将这个子元素=p.children
            // 表示第一次添加
            p.children=[c]
          }
        }
      })
    })
  }
  return parants
}


/**
 * 将上面的树形treeRouter改变成我们想要的路由形式，有过滤操作，保留我们想要的
 * 最终会被加载到router中:router.addRouters()
 * [{path:'',name:'',component:'',children:[{}]}]
 * 
 */
function generateRouter(userRouters){
  let newRouter=userRouters.map((item)=>{
    let routes={
      path:item.path,
      name:item.name,
      component:()=>import(`@/views/${item.name}`)
    }
    if(item.children){
      routes.children=generateRouter(item.children)
    }
    //由于递归之后又会返回一个routes，放到children中
    return routes
  })
  return newRouter
}

export{
  formatRouterTree,
  generateRouter
}