<template>
  <div>
    <h1>Select</h1>
    Selected flight:  {{selectedFlight}}
    <div v-for="flight in flights">
      <ibe-flight :flight="flight"></ibe-flight>
    </div>

    <ibe-button :text="previousButtonText" :action="previous"></ibe-button>
    <ibe-button :text="nextButtonText" :action="next" :class="'next-button'"></ibe-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import router from '@/router'
  import Flight from '@/components/Flight'

  export default {
    components: {
      'ibe-flight': Flight
    },
    computed: {
      ...mapGetters(
        'search',
        [
          'flights'
        ]
      ),
      ...mapGetters(
        'cart',
        [
          'selectedFlight'
        ]
      ),
      previousButtonText() {
        return 'Previous'
      },
      nextButtonText() {
        return 'Next'
      },
      buttonClass() {
        return '.next-button'
      }
    },
    methods: {
      previous() {
        console.log('previous')
        router.go(-1)
      },
      next() {
        console.log('next')
      }
    }
  }
</script>

<style lang="scss" scoped>
.next-button {
  background: $color-primary;
}
</style>