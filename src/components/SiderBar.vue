<template>
  <div class="side-bar">
    <!-- 首页不需要权限，所有用户都可以访问 -->
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
    </ul>
    <!-- 下面则是动态遍历有权限的路由，进行渲染 -->
    <template v-for="(item,index) of $store.state.userRouters">
      <!--MenuItem会拿到每一个item进行遍历  -->
      <MenuItem :item="item" :key="index"> </MenuItem>
    </template>

  </div>
</template>

<script>
// import store from '@/store'
import MenuItem from './MenuItem.vue'
export default {
  name:'SiderBar',
  data(){
    return{

    }
  },
  components:{
    MenuItem
  },
  mounted(){
    // console.log('嘿嘿',this.$store.state.userRouters)
  }
}
</script>

<style>
.side-bar{
  position: fixed;
  width: 200px;
  left: 0;
  top: 0;
  height: 100%;
  /* 因为上面头部60，然后需要给个内边距 */
  padding-top:90px;
  z-index: 1;
  box-sizing: border-box;
  background-color: #ededed;
}
</style>
