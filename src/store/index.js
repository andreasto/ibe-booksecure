import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import search from './modules/search'
import navigation from './modules/navigation'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  modules: {
    search,
    navigation,
    cart
  }
})
