import { sessionStorage } from '@/services/storage'

const state = {
  airports: window.bookSecure.airports,
  criteria: sessionStorage.get('criteria') || {
    departure: '',
    arrival: '',
    departureDate: '',
    arrivalDate: ''
  },
  passengers: {
    adults: 1,
    children: 0,
    infants: 0
  },
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
  searchButtonText: state => state.searchButtonText,
  showLoader: state => state.showLoader,
  availability: state => state.availability,
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
  }
}

const actions = {
  searchFlights({ dispatch, commit }) {
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
      commit('navigation/unlockSelect', null, { root: true })

      dispatch('saveCriteria')
      dispatch('saveAvailability')
      dispatch('navigation/navigateTo', 'select', { root: true })
    })
  },
  saveCriteria(context) {
    window.sessionStorage.setItem('criteria', JSON.stringify(context.state.criteria))
  },
  saveAvailability(context) {
    window.sessionStorage.setItem('availability', JSON.stringify(context.state.availability))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
