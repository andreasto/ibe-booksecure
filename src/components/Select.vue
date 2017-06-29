<template>
  <div>
    <div v-for="(leg, index) in availability">
      <h3>Leg {{index + 1}}</h3>
      <div v-for="flight in leg">
        <ibe-flight :flight="flight"></ibe-flight>
      </div>
    </div>

    <ibe-previous-next :nextAction="nextAction"></ibe-previous-next>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Flight from '@/components/Flight'

export default {
  components: {
    'ibe-flight': Flight
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
    nextAction() {
      console.log('go next')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .next-button
    border 1px solid red
</style>
