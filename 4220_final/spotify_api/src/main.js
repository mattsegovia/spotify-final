// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueSocketio from 'vue-socket.io'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

// const io = require('./server/server')

// Vue.use(VueSocketio, io)

store = new Vuex.Store({
  state: {
    searches: [],
    artistInfo: {},
    query: ''
  },
  mutations: {
    update(state, newSearches) {
      state.searches = newSearches
    },
    updateArtistInfo(state, newArtistInfo) {
      state.artistInfo = newArtistInfo
    }
  }
})

/* eslint-disable no-new */
app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
