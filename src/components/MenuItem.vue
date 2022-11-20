<template>
  <div>
    <!-- 渲染有children的多级路由 -->
    <ul v-if="item.children && item.children.length>0">
      <li>
        <!-- 这里再判断一层的原因是后端最外层的路由没有返回item.link，那么可以使用path替代，如果有返回则不需要 -->
        <router-link :to="item.link || item.path">{{item.title}}</router-link>
        <!-- 遍历的思想，再次遍历item下的children -->
        <template v-for="(v,i) in item.children">
          <MenuItem :item="v" :key="i"></MenuItem>
        </template>
      </li>
    </ul>
    <!-- 没有children的路由则直接显示 -->
    <ul v-else>
      <router-link :to="item.link || item.path">{{item.title}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name:'MenuItem',
  data(){
    return {

    }
  },
  props:{
    item:Object
  },
}
</script>

<style lang="" scoped>

</style>
