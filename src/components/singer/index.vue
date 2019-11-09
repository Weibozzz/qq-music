<template>
  <div class="singer" ref="singer">
    <ListView :data="singers"></ListView>
  </div>
</template>

<script>
  import ListView from '@/base/list-view'
  import {getSingerList} from '@/api/singer'
  import Singer from '@/common/js/singer'
  export default {
    data () {
      return {
        singers: []
      };
    },
    components: {
      ListView
    },
    created(){
      this._getSingerList()
    },
    methods: {
      _normalizeSinger (list = []) {
        return list.map(item => {
          const { Fsinger_mid: id, Fother_name: name } = item
          return new Singer({id, name})
        })
      },
      async _getSingerList (){
        const result = await getSingerList()
        const {code, data = {}} = result
        if( code === 0){
          this.singers = this._normalizeSinger(data.list)
        }
      }
    }
  }
</script>

<style>

</style>
