<template>
  <div class="form-group passenger-select" :class="classes" v-click-outside="closeDropDown">
    <label class="floating-label">Select passengers</label>
    <div class="click-area" @click="toggleDropDown">{{passengerSelectText}}</div>
    <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>

    <ul v-show="showDropDown">
      <li>
        Adults
        <div class="buttons">
          <button @click="$store.commit('search/decrementAdults')">-</button>
          <span class="counter">{{passengers.adults}}</span>
          <button @click="$store.commit('search/incrementAdults')">+</button>
        </div>
      </li>
      <li>
        Children
        <div class="buttons">
          <button @click="$store.commit('search/decrementChildren')">-</button>
          <span class="counter">{{passengers.children}}</span>
          <button @click="$store.commit('search/incrementChildren')">+</button>
        </div>
      </li>
      <li>
        Infants
        <div class="buttons">
          <button @click="$store.commit('search/decrementInfants')">-</button>
          <span class="counter">{{passengers.infants}}</span>
          <button @click="$store.commit('search/incrementInfants')">+</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    iconLeft: { type: String, default: 'people' },
    iconRight: { type: String }
  },
  data() {
    return {
      classes: {
        'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
        'with-icon-right': this.iconRight && this.iconRight.length > 0
      },
      showDropDown: false
    }
  },
  computed: mapGetters(
    'search',
    [
      'passengerSelectText',
      'passengers'
    ]),
  methods: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown
    },
    closeDropDown() {
      this.showDropDown = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  .passenger-select
    position relative

  ul
    position absolute
    top 50px
    left 0
    width 100%
    background white
    list-style none
    padding 0
    margin 0
    border 1px solid rgba(0, 0, 0, .2)
    z-index 10

  li
    padding 10px

  .buttons
    float right
</style>
