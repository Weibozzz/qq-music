import Vue from 'vue'
import router from './router'
import App from './App.vue'
import 'swiper/dist/css/swiper.min.css';
import  '@/common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
