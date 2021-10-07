import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import storage from './storage/storage.js'
import VideoBackground from 'vue-responsive-video-background-player'

Vue.component('video-background', VideoBackground);

Vue.use(Vuex);
const store = new Vuex.Store(storage);

Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
