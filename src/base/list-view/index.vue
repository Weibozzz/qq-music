<template>
  <div class="listview">
    <uL>
      <li @click="selectItem(item)"
          v-for="item in data"
          :key="item.id"
          class="list-group-item">
        <img class="avatar" :src="item.avatar">
        <span class="name">{{item.name}}</span>
      </li>
    </uL>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    computed: {
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      selectItem (){}
    },
    components: {
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"


  .list-group-item
    display: flex
    align-items: center
    padding: 20px 0 0 30px
    .avatar
      width: 50px
      height: 50px
      border-radius: 50%
    .name
      margin-left: 20px
      color: $color-text-l
      font-size: $font-size-medium
</style>
