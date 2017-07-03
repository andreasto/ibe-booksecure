const state = {
    cart: {
        selectedFlight: { departure: 'ARN', arrival: 'GOT', selected: false }
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
    selectFlight({ commit, dispatch }, flight) {
        flight.selected = true
        commit('selectFlight', flight)
        commit('navigation/unlockInformation', null, { root: true })

        dispatch('navigation/navigateTo', 'information', { root: true })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
