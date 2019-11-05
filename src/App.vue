<template>
  <div id="app">
    <MHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/MHeader'
export default {
  name: 'app',
  components: {
    MHeader
  }
}
</script>

<style>

</style>
