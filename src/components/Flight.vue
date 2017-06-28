<template>
  <div class="flight" @click="selectFlight(flight)">
    Flight data:<br> {{flight}}
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      flight: Object
    },
    data() {
      return {
        selectedFlight: null
      }
    },
    methods: {
      ...mapActions(
        'cart',
        [
          'selectFlight'
        ])
    }
  }

</script>

<style lang="scss" scoped>
  $test: 40px;
  
  .flight {
    border: 1px solid;
    margin-bottom: 20px;
    padding: $test;
    width: 100%;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
  }
</style>