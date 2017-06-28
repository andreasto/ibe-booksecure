<template>
  <div id="datepicker" class="datepicker">
    <div class="trip-type">{{tripType}}</div>
    <label>Select dates</label>
    <div class="click-area">{{datesSelectedText}}</div>
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

<style src="pikaday/css/pikaday.css"></style>

<style scoped>
  .datepicker {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, .2);
    position: relative;
    font-size: 16px;
    height: 50px;
    background: white;
    min-width: 160px;
  }
  
  label {
    position: absolute;
    top: 4px;
    left: 11px;
    text-transform: uppercase;
    font-size: .7em;
  }
  
  .trip-type {
    position: absolute;
    right: 6px;
    top: 4px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: green;
  }
  
  .click-area {
    padding: 18px 10px 8px;
    line-height: 1.8em;
    font-size: 1em;
    height: 100%;
  }
</style>