const state = {
    airports: window.bookSecure.airports,
    criteria: [
        {
            departure: '',
            arrival: '',
            departureDate: '',
            arrivalDate: ''
        }
    ],
    passengers: {
        adults: 2,
        children: 1,
        infants: 1
    },
    searchType: 'single',
    searchButtonText: window.bookSecure.texts.searchButtonText,
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
    passengerSelectText: state => `${state.passengers.adults} adults, ${state.passengers.children + state.passengers.infants} children`,
    criteria: state => state.criteria,
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
    changeSearchType(state, value) {
        if (value === 'multiCity') {
            state.criteria[0].arrivalDate = ''
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
    removeFlightLeg(state) {
        if (state.criteria.length === 0) {
            return
        }

        state.criteria.pop()
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
        })
    }
}

const actions = {
    searchFlights({ dispatch, commit }) {
        commit('cart/clearSelectedItems', null, { root: true })
        commit('navigation/resetAccess', null, { root: true })
        commit('hideSearchForm')
        commit('toggleLoader')

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        [
                            { departure: 'ARN', arrival: 'GOT', selected: false },
                            { departure: 'ARN', arrival: 'GOT', selected: false },
                            { departure: 'ARN', arrival: 'GOT', selected: false }
                        ],
                        [
                            { departure: 'ARN', arrival: 'GOT', selected: false },
                            { departure: 'ARN', arrival: 'GOT', selected: false },
                            { departure: 'ARN', arrival: 'GOT', selected: false }
                        ],
                        [
                            { departure: 'ARN', arrival: 'GOT', selected: false },
                            { departure: 'ARN', arrival: 'GOT', selected: false },
                            { departure: 'ARN', arrival: 'GOT', selected: false }
                        ]
                    ]
                )
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
