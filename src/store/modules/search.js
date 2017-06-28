import router from '@/router'
import {sessionStorage} from '@/services/storage'

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
  flights: [],
  hideSearchForm: false
}

const getters = {
  airports: state => state.airports,
  passengers: state => state.passengers,
  passengerSelectText: state => `${state.passengers.adults} adults, ${state.passengers.children + state.passengers.infants} children`,
  criteria: state => state.criteria,
  searchButtonText: state => state.searchButtonText,
  showLoader: state => state.showLoader,
  flights: state => state.flights,
  hideSearchForm: state => state.hideSearchForm
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
  addFlights(state, value) {
    state.flights = value
  }
}

const actions = {
  searchFlights({dispatch, commit}) {
    commit('hideSearchForm')
    commit('toggleLoader')

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {test: 'yeah'},
          {test: 'yeah'},
          {test: 'yeah'},
          {test: 'yeah'},
          {test: 'yeah'},
          {test: 'yeah'},
          {test: 'yeah'}
        ])
      }, 1000)
    }).then((response) => {
      console.log('response', response)
      commit('toggleLoader')
      commit('addFlights', response)

      dispatch('saveCriteria')
      dispatch('saveSearchResponse')

      router.push('select')
    })
  },
  saveCriteria(context) {
    console.log('saveCriteria')
    window.sessionStorage.setItem('criteria', JSON.stringify(context.state.criteria))
  },
  saveSearchResponse(context) {
    console.log('saveSearchResponse')
    window.sessionStorage.setItem('saveSearchResponse', JSON.stringify(context.state.flights))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}