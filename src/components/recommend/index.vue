<template>
  <div class="">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in recommendData"
             :key="item.picUrl"
             class="swiper-slide">
          <img :src="item.picUrl">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li @click="selectItem(item)"
            v-for="item in discList"
            :key="item.dissname"
            class="item">
          <div class="icon">
            <img width="60" height="60" :src="item.imgurl">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import { getRecommend, getDiscList } from '@/api/recommend'
  export default {
    data () {
      return {
        recommendData: [],
        discList: [],
      };
    },
    created (){
      this._getRecommend()
    },
    mounted () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      })
    },
    methods: {
      async _getRecommend(){
        const result = await getRecommend()
        const {code, data = {}} = result
        if( code === 0){
          this.recommendData = data.slider || []
        }
        const discList = await getDiscList()
        const {code: disCode, data: dicData = {}} = discList || {}
        if( disCode === 0){
          this.discList = dicData.list || []
        }
      },
      selectItem () {

      }
    }
  }
</script>

<style scoped lang="stylus">

  @import "~@/common/stylus/variable"
  .swiper-container
    width: 100%;
    height: 100%;
  .swiper-slide
    img
      width: 100%;


  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

  .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
</style>
