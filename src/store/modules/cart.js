import store from '@/store'
import _ from 'lodash'
import { passengerTypes } from '@/core/constants'

const state = {
    selectedFlights: [],
    firstVisit: true,
    passengers: [],
    options: [
        { id: 1, title: '05KG EXTRA BAGGAGE', price: 100, quantity: 0 },
        { id: 2, title: '10KG EXTRA BAGGAGE', price: 200, quantity: 0 },
        { id: 3, title: 'SPECIAL PROMOTION 10KG EXTRA BAGGAGE', price: 100, quantity: 0 },
        { id: 4, title: 'SPECIAL PROMOTION 10KG EXTRA BAGGAGE', price: 150, quantity: 0 },
        { id: 5, title: 'SPECIAL PROMOTION 20KG EXTRA BAGGAGE', price: 200, quantity: 0 },
        { id: 6, title: 'WHEELCHAIR FOR DEPARTURE FROM AUH&DXB', price: 175, quantity: 0 }
    ],
    selectedOptions: [],
    pax: ''
}

const getters = {
    selectedFlights: (state) => state.selectedFlights,
    allFlightsSelected: (state) => state.selectedFlights.length === store.getters['search/numberOfRoutes'],
    contactInformation: (state) => state.contactInformation,
    cartPassengers: (state) => state.passengers,
    pax: (state) => state.pax,
    options: (state) => state.options,
    selectedOptions: (state) => state.selectedOptions
}

const mutations = {
    selectFlight(state, payload) {
        let flightRouteIndex = _.findIndex(state.selectedFlights, { route: payload.route })
        if (flightRouteIndex > -1) {
            state.selectedFlights.splice(flightRouteIndex, 1)
        }

        payload.flight.selected = true
        payload.flight.Fares.forEach((fare) => {
            if (fare.Id === payload.fareId) {
                fare.selected = true
            } else {
                fare.selected = false
            }
        })

        let flight = payload.flight
        let selectedFlight = {
            route: payload.route,
            key: flight.Key,
            id: flight.Id,
            fareId: payload.fareId,
            departureDate: flight.DepartureDateTime,
            from: flight.From.Code,
            to: flight.To.Code,
            legs: []
        }
        flight.Legs.forEach((leg) => {
            selectedFlight.legs.push({
                id: leg.Id,
                departureDate: leg.DepartureDate,
                flightTime: leg.FlightTime
            })
        })
        state.selectedFlights.push(selectedFlight)
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
    },
    addSelectedOption(state, { optionId, flightId, passengerIndex }) {
        state.selectedOptions.push({ optionId, flightId, passengerIndex })
    },
    subtractSelectedOption(state, { optionId, flightId, passengerIndex }) {
        let removeIndex = _.findIndex(state.selectedOptions, { optionId, flightId, passengerIndex })
        if (removeIndex > -1) {
            state.selectedOptions.splice(removeIndex, 1)
        }
    }
}

const actions = {
    selectFlight({ commit, dispatch, state, rootGetters }, payload) {
        console.log('selectFlight')
        commit('selectFlight', payload)

        let flightsForAllRoutesSelected = state.selectedFlights.length === rootGetters['search/numberOfRoutes']
        if (!flightsForAllRoutesSelected) {
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
