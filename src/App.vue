<template>
  <div id="app">
    <Header></Header>
    <SiderBar></SiderBar>
    <PageBoard></PageBoard>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SiderBar from './components/SiderBar.vue'
import PageBoard from './components/PageBoard.vue'
export default{
  name:'app',
  components:{
    Header,
    SiderBar,
    PageBoard
  },
}
</script>
<style>
#app{
  width: 100%;
}
</style>
