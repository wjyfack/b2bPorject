<template>
  <div>
    <div class="nav-header">
      <div class="nav-cont">
        <div class="nav-add">佛山<i class="el-icon-arrow-down"></i></div>
        <div class="nav-input"><el-input placeholder="商品/店铺搜索"></el-input></div>
        <div class="nav-notice" :class=""><i class="el-icon-bell"></i></div>
      </div>
    </div>
    <Carousel></Carousel>
    <div class="nav-list">
      <ul class="nav-list-ul">
        <li class="nav-list-item">
          <img src="http://placehold.it/100x100" alt="">
          <span>店铺街</span>
        </li>
      </ul>
    </div>
    <div>
      <ul class="article-group">

        <li class="article-list-other">
            <div class="content">
              <div class="hd">标题</div>
              <div class="read">阅读量： 999&nbsp;&nbsp;&nbsp;&nbsp;分类</div>
            </div>
            <div class="img-list">
              <img class="img-al" src="http://placehold.it/100x100">
            </div>
        </li>

      </ul>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import Carousel from '@/Pages/carousel'
  import FooterNav from '@/Pages/FooterNav'
    export default {
        name: "index",
      components: {
          Carousel,
          FooterNav
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

}
.nav-header .nav-cont {
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
.nav-list .nav-list-ul {
  list-style-type: none;
  width:100%;
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  padding:0;
  margin:0;
}
.nav-list .nav-list-ul .nav-list-item {width:20%; padding:.5rem;}
.nav-list .nav-list-ul .nav-list-item img {width: 100%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;}
.article-group {padding:.5rem 0;background-color: #F4F4F4;}

.article-group .article-list .img-list img{width:32%;}
.article-group .article-list .read{font-size: 1rem;color:#666666;padding:.5rem 0;}
.article-list-other {padding:.5rem;border-bottom: 1px solid #DFDFDF; width:100%;
  background: #FFF;box-sizing:border-box;}
.article-list-other {display: flex;flex-wrap: nowrap; justify-content: space-between;}
.article-list-other .content {display: flex;flex-direction: column;}
.article-list-other .content .hd{padding:.5rem 0;font-size: 1rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
.article-list-other .content .read{padding:.5rem 0;font-size: 1rem;color:#666;}
</style>
