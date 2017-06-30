// https://github.com/ankurk91/vue-flatpickr-component
// https://chmln.github.io/flatpickr/options/

<template>
  <div id="datepicker" class="form-group datepicker" :class="classes">
    <div class="trip-type">{{tripType}}</div>
    <label class="floating-label">{{labelText}}</label>
    <div class="selected-dates">{{selectedDatesText}}</div>
    <flat-pickr :config="config" :placeholder="labelText" v-model="selectedDates" class="click-area"></flat-pickr>
    <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
  </div>
</template>

<script>
import moment from 'moment'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

const dateFormat = 'YYYY-MM-DD'

export default {
  props: {
    from: { type: String, required: true },
    to: { type: String },
    mode: { type: String, default: 'single' },
    iconLeft: { type: String },
    iconRight: { type: String }
  },
  data() {
    return {
      classes: {
        'with-icon-left': this.iconLeft && this.iconLeft.length > 0,
        'with-icon-right': this.iconRight && this.iconRight.length > 0
      },
      labelText: this.mode === 'single' ? 'Select date' : 'Select dates',
      fromDate: this.from,
      toDate: this.to,
      selectedDates: null,
      config: {
        mode: this.mode,
        disableMobile: true,
        defaultDate: (this.mode === 'range') ? [this.from, this.to] : this.from,
        onChange: (selectedDates, dateStr, instance) => {
          if (selectedDates.length === 1) {
            // reset dates if two dates have already been selected, and user selects a new one
            if (this.fromDateSelected && this.toDateSelected) {
              this.fromDate = null
              this.toDate = null
            }

            this.fromDate = moment(selectedDates[0]).format(dateFormat)
            this.$emit('datepickerFromChanged', this.fromDate)
          } else if (selectedDates.length === 2) {
            this.fromDate = moment(selectedDates[0]).format(dateFormat)
            this.toDate = moment(selectedDates[1]).format(dateFormat)
            this.$emit('datepickerFromChanged', this.fromDate)
            this.$emit('datepickerToChanged', this.toDate)
          }
          // console.log('fromDate', this.fromDate)
          // console.log('toDate', this.toDate)
          // console.log('dates changed', selectedDates)
        }
      }
    }
  },
  computed: {
    fromDateSelected() {
      return this.fromDate && this.fromDate.length > 0
    },
    toDateSelected() {
      return this.toDate && this.toDate.length > 0
    },
    selectedDatesText() {
      let text = this.labelText

      if (!this.fromDate && !this.toDate) {
        return text
      }

      if ((this.fromDateSelected && !this.toDateSelected) || (this.fromDate === this.toDate)) {
        text = this.fromDate
      } else if (this.fromDateSelected && this.toDateSelected) {
        text = this.fromDate + ' - ' + this.toDate
      }

      return text
    },
    tripType() {
      let tripType = ''

      if (this.mode === 'single' || (!this.fromDateSelected && !this.toDateSelected)) {
        return ''
      }

      if ((this.fromDateSelected && !this.toDateSelected) || (this.fromDate === this.toDate)) {
        tripType = 'One-way'
      } else if (this.fromDateSelected && this.toDateSelected) {
        tripType = 'Roundtrip'
      }

      return tripType
    }
  },
  components: {
    flatPickr
  }
}
</script>

<style lang="stylus" scoped>
  .datepicker
    min-width 160px
    overflow hidden

  .trip-type
    position absolute
    right 8px
    top 8px
    font-size 10px
    text-transform uppercase
    font-weight bold
    color color-third

  .selected-dates
    position absolute
    background white
    top 18px
    left 49px
    width 250px
    padding 4px 0
    pointer-events none
</style>
