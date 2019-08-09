<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import css from '@/../static/default.css'

export default {
  name: 'App'
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Roboto','PingFang SC','Hiragino Sans GB','Heiti SC','Microsoft YaHei','WenQuanYi Micro Hei','serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
