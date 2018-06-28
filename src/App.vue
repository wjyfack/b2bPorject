<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{padding:0;margin:0;}
  body{ font-size: 12px;padding:0;margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
  a{text-decoration: none;}
  .col-3 {color: #333333;}
  .col-6 {color: #666666;}
  .col-9 {color: #999999;}
</style>
