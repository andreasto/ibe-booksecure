<template>
  <div class="passenger">
    <div class="title">Passenger {{index}}</div>
    <div class="form-elements">
      <ibe-dropdown :items="titlesAdults" :value="passenger.tile" :label="'Title'" :noneSelectedText="'Select title'"></ibe-dropdown>
      <ibe-input :value="passenger.firstName" :label="'First name'"></ibe-input>
      <ibe-input :value="passenger.lastName" :label="'Last name'"></ibe-input>
      <ibe-input :value="passenger.email" :label="'E-mail'"></ibe-input>
      <ibe-input :value="passenger.phone" :label="'Phone'"></ibe-input>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    passenger: Object,
    index: Number
  },
  computed: {
    ...mapGetters(
      'search',
      [
        'titlesAdults',
        'titlesChildren'
      ]
    )
  }
}
</script>

<style lang="stylus" scoped>
  .passenger
    margin-bottom 20px

  .form-elements
    @media tablet-and-up
      display flex

  .title
    font-size 22px
    margin-bottom 10px
</style>
