import router from '@/router'

const state = {
  cart: {
    selectedFlight: { test: 'annat' }
  }
}

const getters = {
  cart: (state) => state.cart,
  selectedFlight: (state) => state.cart.selectedFlight
}

const mutations = {
  selectFlight(state, flight) {
    state.cart.selectedFlight = flight
  }
}

const actions = {
  selectFlight({ commit }, flight) {
    commit('selectFlight', flight)

    router.push('information')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}