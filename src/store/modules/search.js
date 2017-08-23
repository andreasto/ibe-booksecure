//import _ from 'lodash'
import { mockedAvailabilityResponse } from './../../mock/availabilityResponse'
import { airports } from './../../mock/airports'
import { defaultRoute } from '@/core/constants'

const texts = window.bookSecure.texts

const state = {
    airports,
    routes: [
        {
            fromAirport: 'CTG', // use defaultRoute
            toAirport: 'BOG',
            date: '2017-11-01',
            arrivalDate: '2017-11-10'
        }
    ],
    promoCode: '',
    passengers: {
        adults: 1,
        children: 0,
        infants: 0
    },
    searchType: 'roundTrip',
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
    routes: state => state.routes,
    promoCode: state => state.promoCode,
    searchType: state => state.searchType,
    searchButtonText: state => state.searchButtonText,
    showLoader: state => state.showLoader,
    availability: state => state.availability,
    numberOfRoutes: state => {
        let isRoundTrip = state.searchType === 'roundTrip' && state.availability.length === 1
        return isRoundTrip ? state.availability.length + 1 : state.availability.length
    },
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
    addAvailability(state, availabilityResponse) {
        const flights = availabilityResponse.Flights
        if (!flights) {
            return
        }
        let routes = state.routes.slice()
        let groupedAvailability = []

        // if roundtrip, routes only have one object, but flight listing requires two
        if (state.searchType === 'roundTrip' && routes.length === 1) {
            routes.push({
                fromAirport: routes[0].toAirport,
                toAirport: routes[0].fromAirport,
                date: ''
            })
        }
        routes.forEach(() => {
            groupedAvailability.push([])
        })

        routes.forEach((route, index) => {
            flights.forEach((flight) => {
                if (route.fromAirport === flight.From.Code && route.toAirport === flight.To.Code) {
                    groupedAvailability[index].push(flight)
                }
            })
        })
        state.availability = groupedAvailability
    },
    addPromoCode(state, promoCode) {
        state.promoCode = promoCode
    },
    changeSearchType(state, value) {
        if (value === 'multiCity') {
            let firstRoute = state.routes[0]
            firstRoute.arrivalDate = ''
            state.routes.splice(0, 1, firstRoute)
        }

        state.searchType = value
    },
    addRoute(state) {
        state.routes.push(defaultRoute)
    },
    removeRoute(state, index) {
        if (state.routes.length === 0 || index > state.routes.length) {
            return
        }

        state.routes.splice(index, 1)
    },
    removeMultiCity(state) {
        if (state.routes.length === 1) {
            return
        }
        state.routes = state.routes.filter((c, index) => index === 0)
    }
}

const actions = {
    searchFlightsMocked({ dispatch, commit, state }) {
        commit('cart/clearSelectedItems', null, { root: true })
        commit('navigation/resetAccess', null, { root: true })
        commit('hideSearchForm')
        commit('toggleLoader')

        // do API call and resolve promise
        commit('clearAvailability')
        commit('addAvailability', mockedAvailabilityResponse)
        commit('navigation/unlock', 'select', { root: true })
        commit('toggleLoader')

        dispatch('navigation/navigateTo', 'select', { root: true })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
