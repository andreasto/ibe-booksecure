import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search'
import payment from './modules/payment'
import navigation from './modules/navigation'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search,
    payment,
    navigation,
    cart
  }
})