import store from '@/store'
import _ from 'lodash'

const state = {
    cart: {
        selectedFlights: [],
        firstVisit: true
    }
}

const getters = {
    cart: (state) => state.cart,
    selectedFlights: (state) => state.cart.selectedFlights,
    allFlightsSelected: (state) => state.cart.selectedFlights.length === store.getters['search/numberOfLegs']
}

const mutations = {
    selectFlight(state, payload) {
        payload.flight.selected = true
        let flightLeg = _.find(state.cart.selectedFlights, { leg: payload.leg })
        if (!flightLeg) {
            state.cart.selectedFlights.push({ flight: payload.flight, leg: payload.leg })
        } else {
            state.cart.selectedFlights[payload.leg] = { flight: payload.flight, leg: payload.leg }
        }
    },
    clearSelectedItems(state) {
        state.cart.selectedFlights = []
        state.cart.firstVisit = true

        // todo: clear selected options etc
    },
    setFirstVisit(state, value) {
        state.cart.firstVisit = value
    }
}

const actions = {
    selectFlight({ commit, dispatch, state, rootGetters }, payload) {
        commit('search/unselectAllFlightsInLeg', payload.leg, { root: true })
        commit('selectFlight', payload)

        let flightsForAllLegsSelected = state.cart.selectedFlights.length === rootGetters['search/numberOfLegs']
        if (!flightsForAllLegsSelected) {
            return
        }

        commit('navigation/unlock', 'information', { root: true })

        if (state.cart.firstVisit) {
            commit('setFirstVisit', false)
            dispatch('navigation/navigateTo', 'information', { root: true })
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
