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
    console.log('selectFlight mutation', flight)
    state.cart.selectedFlight = flight
  }
}

const actions = {
  selectFlight({ commit }, flight) {
    console.log('selectFlight action', flight)

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