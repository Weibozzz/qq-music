<template>
  <div id="app">
    <MHeader />
    <Tab />
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/MHeader/MHeader'
import Tab from './components/tab/tab'
export default {
  name: 'app',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style>

  body{
    background-color: #000000;
  }
</style>
