<template>
  <div>
    <div v-for="(leg, index) in availability">
      <h3>Leg {{index + 1}}</h3>
      <div v-show="!showList">
        <ibe-flight :flight="leg[0]" v-show="!showList"></ibe-flight>
        <ibe-button :action="() => {showList = !showList}" :text="'Show more flights'"></ibe-button>
      </div>

      <div v-for="flight in leg" v-show="showList">
        <ibe-flight :flight="flight"></ibe-flight>
      </div>
    </div>

    <ibe-previous-next :previousAction="previousAction" :nextAction="nextAction"></ibe-previous-next>
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
import Flight from '@/components/Flight'

export default {
  components: {
    'ibe-flight': Flight
  },
  data() {
    return {
      showList: false
    }
  },
  computed: {
    ...mapGetters(
      'search',
      [
        'availability'
      ]
    ),
    ...mapGetters(
      'cart',
      [
        'selectedFlight'
      ]
    )
  },
  methods: {
    previousAction() {
      router.push('search')
    },
    nextAction() {
      console.log('go next')
      this.validateSelectedFlights()
    },
    validateSelectedFlights() {
      console.log('validateSelectedFlights')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
