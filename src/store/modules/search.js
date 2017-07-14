import _ from 'lodash'

var bookSecure = {
    airports: [
        { code: 'AUH', name: 'Abu Dhabi' },
        { code: 'AAN', name: 'Al Ain' },
        { code: 'ATQ', name: 'Amritsar' },
        { code: 'BAH', name: 'Bahrain' },
        { code: 'IXC', name: 'Chandigarh' },
        { code: 'MAA', name: 'Chennai, International Terminal' },
        { code: 'DMM', name: 'Dammam' },
        { code: 'DEL', name: 'Delhi International Airport, T3' },
        { code: 'DAC', name: 'Dhaka' },
        { code: 'DOH', name: 'Doha' },
        { code: 'DXB', name: 'Dubai, Terminal 2' },
        { code: 'JAI', name: 'Jaipur, Terminal 2' },
        { code: 'COK', name: 'Kochi, International Terminal' },
        { code: 'CCU', name: 'Kolkata' },
        { code: 'CCJ', name: 'Kozhikode International Terminal' },
        { code: 'KWI', name: 'Kuwait' },
        { code: 'LKO', name: 'Lucknow' },
        { code: 'IXE', name: 'Mangalore' },
        { code: 'BOM', name: 'Mumbai International Airport, T2, SAHAR' },
        { code: 'MCT', name: 'Muscat' },
        { code: 'PNQ', name: 'Pune' },
        { code: 'RKT', name: 'Ras Al Khaimah' },
        { code: 'RUH', name: 'Riyadh' },
        { code: 'SLL', name: 'Salalah' },
        { code: 'SHJ', name: 'Sharjah' },
        { code: 'SIN', name: 'Singapore' },
        { code: 'TRV', name: 'Thiruvananthapuram, New Intl Term' },
        { code: 'TRZ', name: 'Tiruchirapalli' },
        { code: 'VNS', name: 'Varanasi' }
    ],
    texts: {
        searchButtonText: 'Search'
    }
}

const state = {
    airports: bookSecure.airports,
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
    searchButtonText: bookSecure.texts.searchButtonText,
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
                let flight = {
                    departure: 'AUH',
                    departureName: 'Abu Dhabi',
                    departureDate: '2017-10-05 00:05',
                    arrival: 'DEL',
                    arrivalName: 'Delhi International Airport ,T3',
                    arrivalDate: '2017-11-05 05:05',
                    stops: 0,
                    duration: '3:30',
                    flightNumber: 'IX-116',
                    fareTypes: [
                        { type: 'Express VALUE (FBA 30Kgs)', price: 448.21 },
                        { type: 'Express FLEXI (FBA 30Kgs)', price: 2356.21 }
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
