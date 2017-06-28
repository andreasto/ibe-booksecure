const state = {
  passengers: {
    adults: 4,
    children: 1,
    infants: 0
  }
}

const getters = {
  passengers: state => state.passengers
}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}