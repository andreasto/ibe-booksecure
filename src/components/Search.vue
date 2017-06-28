<template>
  <div>
    <h1>Search</h1>

    <div class="criteria-container" v-show="!hideSearchForm">

      <ibe-dropdown :items="airports" :itemValue="'code'" :itemText="'name'" :value="criteria.departure" :labelText="'Departure'"
        :noneSelectedText="'Choose airport'" @selectChanged="criteria.departure = $event"></ibe-dropdown>

      <ibe-dropdown :items="airports" :itemValue="'code'" :itemText="'name'" :value="criteria.arrival" :labelText="'Arrival'" :noneSelectedText="'Choose airport'"
        @selectChanged="criteria.arrival = $event"></ibe-dropdown>

      <ibe-datepicker :from="criteria.departureDate" :to="criteria.arrivalDate" @datepickerFromChanged="criteria.departureDate = $event"
        @datepickerToChanged="criteria.arrivalDate = $event"></ibe-datepicker>

      <ibe-passenger-select></ibe-passenger-select>
      <ibe-button :text="searchButtonText" :action="search"></ibe-button>

    </div>
    <div>
      
      <p><b>criteria:</b><br>{{JSON.stringify(criteria)}}</p>
      <p><b>passengers:</b><br>{{JSON.stringify(passengers)}}</p>
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

<style>
  .criteria-container {
    background: rgba(0, 0, 0, .1);
    padding: 20px;
    display: flex;
  }
</style>