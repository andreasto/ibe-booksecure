<template>
  <div id="datepicker" class="form-group datepicker">
    <div class="trip-type">{{tripType}}</div>
    <label>Select dates</label>
    <div class="click-area">{{datesSelectedText}}</div>
    <i class="input-icon material-icons">date_range</i>
  </div>
</template>

<script>
import Pikaday from 'pikaday'

export default {
  mounted() {
    const self = this

    const picker = new Pikaday({
      field: document.getElementById('datepicker'),
      numberOfMonths: 2,
      onSelect(date) {
        if (!self.from || self.from.length === 0) {
          self.$emit('datepickerFromChanged', picker.toString())
        } else if (self.from && self.from.length > 0 && (!self.to || self.to.length === 0)) {
          self.$emit('datepickerToChanged', picker.toString())
          hideDatePicker()
        }
      }
    })

    let hideDatePicker = picker.hide
    picker.hide = function () { /*noop*/ }
  },
  props: [
    'from',
    'to'
  ],
  computed: {
    datesSelectedText() {
      let dateText = 'Select dates'

      if (this.from && this.from.length > 0) {
        dateText = this.from
      }

      if (this.to && this.to.length > 0) {
        dateText += ' - ' + this.to
      }

      return dateText
    },
    tripType() {
      let tripType = ''

      if ((this.from && this.from.length > 0) && (!this.to || this.to.length === 0)) {
        tripType = 'One-way'
      } else if ((this.from && this.from.length > 0) && (this.to && this.to.length > 0)) {
        tripType = 'Roundtrip'
      }

      return tripType
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "pikaday/css/pikaday.css"

  .datepicker
    min-width 160px
  
  .trip-type
    position absolute
    right 6px
    top 4px
    font-size 10px
    text-transform uppercase
    font-weight bold
    color green
  
  
</style>