import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'



Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  render: h =>h(App)
})
