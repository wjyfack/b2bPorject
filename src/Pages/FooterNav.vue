<template>
  <footer class="footer-nav dis-box" id="footer-nav">
    <a href="" class="box-flex nav-list active">
      <i class="nav-box i-home"></i><span>首页</span>
    </a>
    <a href="" class="box-flex nav-list">
      <i class="nav-box i-cate"></i><span>求购</span>
    </a>
    <a href="" class="box-flex nav-list">
      <div class="fot-more-img"><img src="__PUBLIC__/img/more.png"><div class="fot-more">更多</div></div>
    </a>
    <a href="" class="box-flex position-rel nav-list">
      <i class="nav-box i-flow"></i><span>资讯</span>
    </a>
    <a href="" class="box-flex nav-list">
      <i class="nav-box i-user"></i><span>我</span>
    </a>
  </footer>
</template>

<script>
    export default {
        name: "FooterNav"
    }
</script>

<style scoped>
.footer-nav {
  background-color: rgba(254, 253, 252, 1);
  left: 0;
  right: 0;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  z-index: 11;
  box-shadow: 1px 5px 15px rgba(50,50,50,0.3);
  border-top: 1px solid #f6f6f9;
  padding: 0.3rem 0;
}
.footer-nav .nav-list {
  font-size: 1.1rem;
  display: block;
  text-align: center;
  padding-top: 0rem;
  color: #595959;
}
.box-flex {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  display: block;
  width: 100%;
}
.dis-box {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
}
</style>
