<template>
  <div id="app">
    <div class="aside">
      <Aside></Aside>
    </div>
    <div class="content">
      <Header></Header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Aside from './components/Aside'

export default {
  name: 'App',
  components: {
    Header,
    Aside
  }
}
</script>

<style>
html,body{height: 100%;box-sizing: border-box;}
#app{
  height: 100%;
}
.aside{
  width: 180px;
  height: 100%;
  float: left;
}
</style>
