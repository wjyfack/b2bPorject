<template>
  <div>
    <div class="nav-header">
      <div class="nav-add">佛山<i class="el-icon-arrow-down"></i></div>
      <div class="nav-input"><el-input placeholder="商品/店铺搜索"></el-input></div>
      <div class="nav-notice" :class=""><i class="el-icon-bell"></i></div>
    </div>
    <Carousel></Carousel>
  </div>
</template>

<script>
  import Carousel from '@/Pages/carousel'
    export default {
        name: "index",
      components: {
          Carousel,
      }
    }
</script>

<style scoped>
.nav-header {
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  width:100%;
  display:flex;
  align-self: center;
  justify-content: space-between;
  background: #0e6eb8;
  color:#fff;
  padding:.5rem 0;
}
.nav-header .nav-add{padding: 0 .5rem;
  align-self: center;}
.nav-header .nav-input{flex: 1;}
.nav-header .nav-notice {padding: 0 .5rem;align-self:center;}
</style>
