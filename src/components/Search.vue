<template>
  <div class="clearfix">
    <div class="search-type-toggle">
      <label>
        <input v-model="searchTypeData" type="radio" name="searchType" :value="'single'"> Oneway/Roundtrip
      </label>
      <label>
        <input v-model="searchTypeData" type="radio" name="searchType" :value="'multiCity'"> Multicity
      </label>
    </div>

    <div class="criteria-container clearfix" v-show="!hideSearchForm" :class="{multicity: isMultiCity}">
      <div class="criteria-row clearfix" v-for="(row, index) in criteria">
        <h3 v-show="isMultiCity">Flight {{index + 1}}</h3>
        <ibe-destination-select :departures="airports" :destinations="airports" :departure="row.departure" :arrival="row.arrival" :label="'Destination'" :iconLeft="'location_on'" :placeholder="'Select departure & destination'" :tabindex="1" @departureChanged="row.departure = $event" @arrivalChanged="row.arrival = $event"></ibe-destination-select>
        <ibe-datepicker :mode="(isMultiCity ? 'single' : 'range')" :from="row.departureDate" :to="row.arrivalDate" :iconLeft="'date_range'" @datepickerFromChanged="row.departureDate = $event" @datepickerToChanged="row.arrivalDate = $event"></ibe-datepicker>
      </div>

      <ibe-button :action="addFlightLeg" :text="'Add flight leg'" v-show="isMultiCity"></ibe-button>

      <ibe-passenger-select></ibe-passenger-select>

      <div class="form-group buttons">
        <ibe-button :text="searchButtonText" :action="searchFlights" :class="'button-search'" class="search-button"></ibe-button>
      </div>
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
import DestinationSelect from '@/components/DestinationSelect'

export default {
  created() {
    this.$store.commit('search/showSearchForm')
  },
  components: {
    'ibe-login-form': LoginForm,
    'ibe-destination-select': DestinationSelect
  },
  computed: {
    isMultiCity() {
      return this.criteria.length > 1 && this.searchType === 'multiCity'
    },
    ...mapGetters(
      'search',
      [
        'criteria',
        'searchType',
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
        'changeSearchType',
        'removeMultiCity'
      ]
    )
  },
  data() {
    return {
      searchTypeData: this.$store.state.search.searchType
    }
  },
  watch: {
    searchTypeData(val, oldVal) {
      if (val === 'single') {
        this.removeMultiCity()
      } else {
        this.addFlightLeg()
      }
      this.changeSearchType(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-type-toggle
    margin-bottom 20px

  .criteria-container

    @media tablet-and-up
      .destination-select,
      .dropdown,
      .passenger-select,
      .datepicker,
      .search-button,
      .criteria-row,
      .buttons
        float left

    &.multicity
      .criteria-row
        float none

  @media tablet-and-up
    .criteria-row
      width 65%

      .destination-select
        width 50%

      .datepicker
        width 50%

    .passenger-select
      width 23%
    .buttons
      width 12%

  .multicity
    .criteria-row
      margin-bottom 10px

</style>
