<template>
  <div class="clearfix">
    isMultiCity: {{isMultiCity}}
    <div class="search-type-toggle">
      <ibe-button :action="switchToSingle" :text="'Oneway/Roundtrip'"></ibe-button>
      <ibe-button :action="switchToMultiCity" :text="'Multicity'"></ibe-button>
    </div>

    <div class="criteria-container" v-show="!hideSearchForm" :class="{multicity: isMultiCity}">
      <div class="criteria-row" v-for="(row, index) in criteria">
        <h3 v-show="isMultiCity">Flight {{index + 1}}</h3>
        <ibe-dropdown :items="airports" :itemValue="'code'" :itemText="'name'" :value="row.departure" :label="'Departure'" :iconLeft="'location_on'" :noneSelectedText="'Choose airport'" @selectChanged="row.departure = $event"></ibe-dropdown>
        <ibe-dropdown :items="airports" :itemValue="'code'" :itemText="'name'" :value="row.arrival" :label="'Arrival'" :noneSelectedText="'Choose airport'" :iconLeft="'location_on'" @selectChanged="row.arrival = $event"></ibe-dropdown>
        <ibe-datepicker :mode="(isMultiCity ? 'single' : 'range')" :from="row.departureDate" :to="row.arrivalDate" :iconLeft="'date_range'" @datepickerFromChanged="row.departureDate = $event" @datepickerToChanged="row.arrivalDate = $event"></ibe-datepicker>
      </div>

      <ibe-button :action="addFlightLeg" :text="'Add flight leg'" v-show="isMultiCity"></ibe-button>

      <ibe-passenger-select></ibe-passenger-select>
      <ibe-button :text="searchButtonText" :action="searchFlights" :class="'button-search'" class="search-button"></ibe-button>
    </div>

    <!--<ibe-login-form></ibe-login-form>-->

    <code>
      <h4>Criteria</h4>
      {{criteria}}
    </code>

    <ibe-loader :text="'Loading...'" v-show="showLoader"></ibe-loader>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import LoginForm from '@/components/LoginForm'

export default {
  created() {
    this.$store.commit('search/showSearchForm')
  },
  components: {
    'ibe-login-form': LoginForm
  },
  computed: {
    isMultiCity() {
      return this.criteria.length > 1 && this.multiCity
    },
    ...mapGetters(
      'search',
      [
        'criteria',
        'multiCity',
        'searchButtonText',
        'airports',
        'passengers',
        'showLoader',
        'hideSearchForm'
      ]
    )
  },
  methods: {
    ...mapActions(
      'search',
      [
        'searchFlights'
      ]
    ),
    ...mapMutations(
      'search',
      [
        'addFlightLeg',
        'toggleMultiCity',
        'removeMultiCity'
      ]
    ),
    switchToSingle() {
      this.removeMultiCity()
      this.toggleMultiCity(false)
    },
    switchToMultiCity() {
      this.addFlightLeg()
      this.toggleMultiCity(true)
    }
  }
}

</script>

<style lang="stylus" scoped>
  .search-type-toggle
    margin-bottom 20px

  .criteria-container
    margin-bottom 20px

    @media tablet-and-up
      display flex
      flex-wrap wrap
      justify-content space-between

      &.multicity
        display block

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

  .criteria-row
    display flex
    align-items center
    flex 1 1 50%
    position relative

  .multicity
    .criteria-row
      margin-bottom 10px

  .search-button
    float right
</style>
