<template>
  <div class="clearfix">
    <div class="criteria-container" v-show="!hideSearchForm">
      <ibe-dropdown :items="airports" :itemValue="'code'" :itemText="'name'" :value="criteria.departure" :label="'Departure'" :iconLeft="'location_on'" :noneSelectedText="'Choose airport'" @selectChanged="criteria.departure = $event"></ibe-dropdown>
      <ibe-dropdown :items="airports" :itemValue="'code'" :itemText="'name'" :value="criteria.arrival" :label="'Arrival'" :noneSelectedText="'Choose airport'" :iconLeft="'location_on'" @selectChanged="criteria.arrival = $event"></ibe-dropdown>
      <ibe-datepicker :mode="'range'" :from="criteria.departureDate" :to="criteria.arrivalDate" :iconLeft="'date_range'" @datepickerFromChanged="criteria.departureDate = $event" @datepickerToChanged="criteria.arrivalDate = $event"></ibe-datepicker>
      <ibe-passenger-select></ibe-passenger-select>
      <ibe-button :text="searchButtonText" :action="search" :class="'button-search'" class="search-button"></ibe-button>
    </div>

    <ibe-loader :text="'Loading...'" v-show="showLoader"></ibe-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    this.$store.commit('search/showSearchForm')
  },
  computed: mapGetters(
    'search',
    [
      'criteria',
      'searchButtonText',
      'airports',
      'passengers',
      'showLoader',
      'hideSearchForm'
    ]),
  methods: {
    search() {
      this.$store.dispatch('search/searchFlights')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .criteria-container
    margin-bottom 20px

    @media tablet-and-up
      display flex
      flex-wrap wrap
      justify-content space-between

      .dropdown
        flex: 0 1 49%;

      .passenger-select,
      .datepicker,
      .search-button
        flex: 0 1 32%;

      .search-button
        float none

    @media desktop-and-up
      flex-wrap nowrap

      .dropdown
        flex: 1 auto;

      .passenger-select,
      .datepicker,
      .search-button
        flex: 1 auto;

  .search-button
    float right
</style>
