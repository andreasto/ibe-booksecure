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
  }
}

const actions = {
  toggleError({commit}) {
    commit('toggleError')

    setTimeout(() => { commit('toggleError') }, 3000)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}