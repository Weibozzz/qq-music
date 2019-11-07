<template>
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
</template>

<script>
  import Swiper from 'swiper';
  import { getRecommend, getDiscList } from '../../api/recommend'
  export default {
    data () {
      return {
        recommendData: []
      };
    },
    created (){
      this._getRecommend()
    },
    mounted () {
      /* eslint no-undef:0 */
      new Swiper('.swiper-container', {
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });
    },
    methods: {
      async _getRecommend(){
        /* eslint no-console:0 */
        const result = await getRecommend()
        const {code, data = {}} = result
        if( code === 0){
          this.recommendData = data.slider || []
        }
        const discList = await getDiscList()
        console.log(discList)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper-container
    width: 100%;
    height: 100%;
  .swiper-slide
    img
      width: 100%;
</style>
