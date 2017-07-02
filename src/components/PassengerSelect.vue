<template>
  <div class="form-group passenger-select" :class="classes" v-click-outside="closeDropDown">
    <div class="click-area" @click="toggleDropDown">
      <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
      <div class="floating-label">Select passengers</div>
      <div class="selected-text">{{passengerSelectText}}</div>

      <ul class="dropdown-list" v-show="showDropDown" @click.stop="() => {}">
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
      showDropDown: false
    }
  },
  computed: {
    classes() {
      return {
        'dropdown-open': this.showDropDown,
        'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
        'with-icon-right': this.iconRight && this.iconRight.length > 0
      }
    },
    ...mapGetters(
      'search',
      [
        'passengerSelectText',
        'passengers'
      ])
  },
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

  .dropdown-list
    li
      cursor default
      &:hover
        background-color white

  .buttons
    float right

    button
      cursor pointer
</style>
