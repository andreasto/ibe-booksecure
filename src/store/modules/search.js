import _ from 'lodash'
import { randomString } from '@/core/helpers'

const airports = window.bookSecure.airports
const texts = window.bookSecure.texts

const state = {
    airports: airports,
    criteria: [
        {
            departure: '',
            arrival: '',
            departureDate: '',
            arrivalDate: ''
        }
    ],
    promoCode: '',
    passengers: {
        adults: 1,
        children: 0,
        infants: 0
    },
    searchType: 'single',
    searchButtonText: texts.searchButtonText,
    showLoader: false,
    availability: [],
    hideSearchForm: false,
    selectOptions: {
        titlesAdults: ['Mr', 'Mrs', 'Miss'],
        titlesChildren: ['Boy', 'Girl']
    }
}

const getters = {
    airports: state => state.airports,
    passengers: state => state.passengers,
    totalPassengers: state => state.passengers.adults + state.passengers.children + state.passengers.infants,
    passengerSelectText: state => {
        let text = `${state.passengers.adults} `
        text += state.passengers.adults === 1 ? 'adult' : 'adults'

        if ((state.passengers.children + state.passengers.infants) > 0) {
            text += `, ${state.passengers.children + state.passengers.infants} `
            text += (state.passengers.children + state.passengers.infants) === 1 ? 'child' : 'children'
        }
        return text
    },
    criteria: state => state.criteria,
    promoCode: state => state.promoCode,
    searchType: state => state.searchType,
    searchButtonText: state => state.searchButtonText,
    showLoader: state => state.showLoader,
    availability: state => state.availability,
    numberOfLegs: state => state.availability.length,
    hideSearchForm: state => state.hideSearchForm,
    titlesAdults: state => state.selectOptions.titlesAdults,
    titlesChildren: state => state.selectOptions.titlesChildren
}

const mutations = {
    incrementAdults(state) {
        state.passengers.adults++
    },
    decrementAdults(state) {
        state.passengers.adults--
    },
    incrementChildren(state) {
        state.passengers.children++
    },
    decrementChildren(state) {
        state.passengers.children--
    },
    incrementInfants(state) {
        state.passengers.infants++
    },
    decrementInfants(state) {
        state.passengers.infants--
    },
    toggleLoader(state) {
        state.showLoader = !state.showLoader
    },
    hideSearchForm(state) {
        state.hideSearchForm = true
    },
    showSearchForm(state) {
        state.hideSearchForm = false
    },
    clearAvailability(state) {
        state.availability = []
    },
    addAvailability(state, availability) {
        state.availability = availability
    },
    addPromoCode(state, promoCode) {
        state.promoCode = promoCode
    },
    changeSearchType(state, value) {
        if (value === 'multiCity') {
            let firstLeg = state.criteria[0]
            firstLeg.arrivalDate = ''
            state.criteria.splice(0, 1, firstLeg)
        }

        state.searchType = value
    },
    addFlightLeg(state) {
        state.criteria.push({
            departure: '',
            arrival: '',
            departureDate: '',
            arrivalDate: ''
        })
    },
    removeFlightLeg(state, leg) {
        if (state.criteria.length === 0 || leg > state.criteria.length) {
            return
        }

        console.log('leg to remove', leg)

        state.criteria.splice(leg, 1)
    },
    removeMultiCity(state) {
        if (state.criteria.length === 1) {
            return
        }
        state.criteria = state.criteria.filter((c, index) => index === 0)
    },
    unselectAllFlightsInLeg(state, leg) {
        if (state.availability.length < leg) {
            return
        }
        state.availability[leg].forEach((flight) => {
            flight.selected = false

            flight.fareTypes.forEach((fareType) => {
                fareType.selected = false
            })
        })
    }
}

const actions = {
    searchFlights({ dispatch, commit, state }) {
        commit('cart/clearSelectedItems', null, { root: true })
        commit('navigation/resetAccess', null, { root: true })
        commit('hideSearchForm')
        commit('toggleLoader')

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let departureAirport = _.find(state.airports, {code: state.criteria[0].departure})
                let arrivalAirport = _.find(state.airports, {code: state.criteria[0].arrival})
                let flight = {
                    id: randomString(5),
                    departure: departureAirport.code,
                    departureName: departureAirport.name,
                    departureDate: '2017-10-05 00:05',
                    arrival: arrivalAirport.code,
                    arrivalName: arrivalAirport.name,
                    arrivalDate: '2017-11-05 05:05',
                    stops: 0,
                    duration: '3:30',
                    flightNumber: 'IX-116',
                    fareTypes: [
                        { id: randomString(5), type: 'Express VALUE (FBA 30Kgs)', price: 448.21, selected: false },
                        { id: randomString(5), type: 'Express PLUS (FBA 30Kgs)', price: 1448.21, selected: false },
                        { id: randomString(5), type: 'Express FLEXI (FBA 30Kgs)', price: 2356.21, selected: false }
                    ],
                    selected: false
                }

                let availability = []
                let legs = []
                for (let i = 0; i < state.criteria.length; i++) {
                    let flights = []
                    _.times(5, () => { flights.push(JSON.parse(JSON.stringify(flight))) })
                    legs.push(JSON.parse(JSON.stringify(flights)))
                    if (state.criteria.length === 1 && (state.criteria[0].arrivalDate && state.criteria[0].arrivalDate !== '')) {
                        legs.push(flights)
                    }
                }
                legs.forEach((leg) => {
                    availability.push(leg)
                })

                console.log(availability)

                resolve(availability)
            }, 1000)
        }).then((response) => {
            console.log('response', response)
            commit('toggleLoader')
            commit('clearAvailability', response)
            commit('addAvailability', response)
            commit('navigation/unlock', 'select', { root: true })

            dispatch('navigation/navigateTo', 'select', { root: true })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
