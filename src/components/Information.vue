<template>
  <div>
    <h1>Information</h1>
    {{totalPassengers}}

    <div v-for="passenger in totalPassengers">
      <ibe-passenger></ibe-passenger>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Passenger from '@/components/Passenger'

export default {
  components: {
    'ibe-passenger': Passenger
  },
  computed: {
    ...mapGetters(
      'search',
      [
        'totalPassengers'
      ])
  }
}
</script>
