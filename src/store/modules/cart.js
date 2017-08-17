import store from '@/store'
import _ from 'lodash'
import {passengerTypes} from '@/core/constants'

const state = {
    selectedFlights: [],
    firstVisit: true,
    passengers: [],
    pax: ''
}

const getters = {
    selectedFlights: (state) => state.selectedFlights,
    allFlightsSelected: (state) => state.selectedFlights.length === store.getters['search/numberOfLegs'],
    contactInformation: (state) => state.contactInformation,
    cartPassengers: (state) => state.passengers,
    pax: (state) => state.pax
}

const mutations = {
    selectFlight(state, payload) {
        payload.flight.selected = true

        payload.flight.fareTypes.forEach((fareType) => { fareType.selected = false })
        payload.fareType.selected = true
        let flightLegIndex = _.findIndex(state.selectedFlights, { leg: payload.leg })
        if (flightLegIndex > -1) {
            state.selectedFlights.splice(flightLegIndex, 1)
        }
        state.selectedFlights.push({ flight: payload.flight, leg: payload.leg })
    },
    clearSelectedItems(state) {
        state.selectedFlights = []
        state.firstVisit = true

        // todo: clear selected options etc
    },
    setFirstVisit(state, value) {
        state.firstVisit = value
    },
    initiatePassengers(state, criteriaPassengers) {
        let Passenger = function (type) {
            this.type = type || passengerTypes.adult
            this.title = ''
            this.firstName = ''
            this.lastName = ''
            this.dateOfBirth = ''
            this.passportNumber = ''
            this.contactInformation = {
                phone: '',
                mobile: '',
                workPhone: '',
                email: ''
            }
            this.addressInformation = {
                address1: '',
                address2: '',
                zip: '',
                city: '',
                state: '',
                country: ''
            }
        }
        state.passengers = []

        for (let i = 0; i < criteriaPassengers.adults; i++) {
            state.passengers.push(new Passenger())
        }
        for (let i = 0; i < criteriaPassengers.children; i++) {
            state.passengers.push(new Passenger(passengerTypes.child))
        }
        for (let i = 0; i < criteriaPassengers.infants; i++) {
            state.passengers.push(new Passenger(passengerTypes.infant))
        }
    },
    savePax(state, pax) {
        state.pax = pax
    }
}

const actions = {
    selectFlight({ commit, dispatch, state, rootGetters }, payload) {
        commit('search/unselectAllFlightsInLeg', payload.leg, { root: true })
        commit('selectFlight', payload)

        let flightsForAllLegsSelected = state.selectedFlights.length === rootGetters['search/numberOfLegs']
        if (!flightsForAllLegsSelected) {
            return
        }

        commit('navigation/unlock', 'information', { root: true })

        if (state.firstVisit) {
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
