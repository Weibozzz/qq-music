<template>
  <div id="app">
    <MHeader />
    <Tab />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '@/components/MHeader/MHeader'
import Tab from '@/base/tab/tab'
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
