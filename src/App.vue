<template>
  <div id="app">
    <Header></Header>
    <Aside></Aside>
    <router-view/>
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

<style scoped>

</style>
