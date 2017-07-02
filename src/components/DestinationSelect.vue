<template>
  <div class="form-group destination-select" :class="classes" v-click-outside="closeDropDown">
    <div class="click-area" @click="toggleDropDown">
      <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
      <i class="icon icon-right material-icons" v-show="iconRight">{{iconRight}}</i>
      <div class="floating-label">{{label}}</div>
      <input type="text" :value="selectedText" class="selected-text-input">

      <div class="destination-panel dropdown-list" v-show="showDropDown" @click.stop="() => {}">
        <div class="departures">
          <h3>Select departure:</h3>
          <div v-for="(item, index) in departures" @click="selectDeparture(item)" :class="{selected: item.code === departure}" class="destination">
            {{ item.name }}
          </div>
        </div>
        <transition name="fade">
          <div class="destinations" v-show="hasSelectedDeparture">
            <h3>Select destination:</h3>
            <div v-for="(item, index) in destinations" @click="selectDestination(item)" :class="{selected: item.code === arrival}" class="destination">
              {{ item.name }}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.departure && this.departures.length > 0) {
      this.selectedDepartureName = this.departures.find((d) => d.code === this.departure).name
    }
    if (this.arrival && this.destinations.length > 0) {
      this.selectedArrivalName = this.destinations.find((d) => d.code === this.arrival).name
    }
  },
  props: {
    label: { type: String },
    placeholder: { type: String },
    departure: { type: String },
    arrival: { type: String },
    departures: { type: Array },
    destinations: { type: Array },
    iconLeft: { type: String },
    iconRight: { type: String, default: 'keyboard_arrow_down' },
    tabindex: { type: Number, default: -1 }
  },
  data() {
    return {
      hasSelectedDeparture: this.departure,
      showDropDown: false,
      selectedIndex: 0,
      selectedDepartureName: '',
      selectedArrivalName: ''
    }
  },
  computed: {
    selectedText() {
      let text = this.placeholder

      if (this.departure) {
        text = this.selectedDepartureName
      }
      if (this.departure && this.arrival) {
        text = this.selectedDepartureName + ' - ' + this.selectedArrivalName
      }
      return text
    },
    classes: function () {
      return {
        'dropdown-open': this.showDropDown,
        'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
        'with-icon-right': this.iconRight && this.iconRight.length > 0
      }
    }
  },
  methods: {
    closeDropDown() {
      this.showDropDown = false
    },
    toggleDropDown() {
      this.showDropDown = !this.showDropDown
    },
    selectDeparture(item) {
      this.selectedDepartureName = item.name
      this.hasSelectedDeparture = true

      this.$emit('departureChanged', item.code)
    },
    selectDestination(item) {
      this.selectedArrivalName = item.name
      this.showDropDown = false

      this.$emit('arrivalChanged', item.code)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .destination-select
    width 100%

    @media tablet-and-up
      max-width 380px

  .destination-panel
    @media tablet-and-up
      width 500px

  .departures,
  .destinations
    text-align center
    @media tablet-and-up
      float left
      width 50%

    h3
      padding 4px 10px 0
      color color-primary
      font-weight font-weight-light
      text-transform uppercase
      font-size 16px

  .destinations
    border-left border-light
  .destination
    padding 10px

  .selected
    border 1px solid
</style>
