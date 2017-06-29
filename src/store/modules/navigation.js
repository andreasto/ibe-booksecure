import router from '@/router'

const state = {
  search: { canAccess: true },
  select: { canAccess: false },
  information: { canAccess: false },
  options: { canAccess: false },
  payment: { canAccess: false },
  receipt: { canAccess: false },
  showError: false
}

const getters = {
  canAccessSearch: (state) => state.search.canAccess,
  canAccessSelect: (state) => state.select.canAccess,
  canAccessInformation: (state) => state.information.canAccess,
  canAccessOptions: (state) => state.options.canAccess,
  canAccessPayment: (state) => state.payment.canAccess,
  canAccessReceipt: (state) => state.receipt.canAccess,
  showError: (state) => state.showError
}

const mutations = {
  toggleError(state) {
    state.showError = !state.showError
  },
  resetAccess(state) {
    state.search.canAccess = true
    state.select.canAccess = false
    state.information.canAccess = false
    state.options.canAccess = false
    state.payment.canAccess = false
    state.receipt.canAccess = false
  },
  unlockSelect(state) {
    state.select.canAccess = true
  },
  unlockInformation(state) {
    state.information.canAccess = true
  },
  unlockOptions(state) {
    state.options.canAccess = true
  },
  unlockPayment(state) {
    state.payment.canAccess = true
  },
  unlockReceipt(state) {
    state.receipt.canAccess = true
  }
}

const actions = {
  toggleError({ commit }) {
    commit('toggleError')

    setTimeout(() => { commit('toggleError') }, 3000)
  },
  navigateTo({ commit }, route) {
    router.push(route)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
