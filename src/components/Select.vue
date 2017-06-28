<template>
  <div>
    <h1>Select</h1>
    <div v-for="flight in flights">{{flight}}</div>

    <ibe-button :text="previousButtonText" :action="previous"></ibe-button>
    <ibe-button :text="nextButtonText" :action="next" :class="'next-button'"></ibe-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import router from '@/router'

  export default {
    computed: {
      ...mapGetters(
        'search',
        [
          'flights'
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

<style scoped>
.next-button {
  background: green;
}
</style>