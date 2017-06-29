// https://github.com/ankurk91/vue-flatpickr-component
// https://chmln.github.io/flatpickr/options/

<template>
  <div id="datepicker" class="form-group datepicker">
    <div class="trip-type">{{tripType}}</div>
    <label>Select dates</label>
    <flat-pickr :config="config" :placeholder="'Select dates'" v-model="selectedDates" class="click-area"></flat-pickr>
    <i class="input-icon material-icons">date_range</i>
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
    mode: { type: String, default: 'single' }
  },
  data() {
    return {
      fromDate: '',
      toDate: '',
      selectedDates: null,
      config: {
        mode: this.mode,
        onChange: (selectedDates, dateStr, instance) => {
          if (selectedDates.length === 1) {
            this.fromDate = moment(selectedDates[0]).format(dateFormat)
            this.$emit('datepickerFromChanged', this.fromDate)
          } else if (selectedDates.length === 2) {
            this.toDate = moment(selectedDates[1]).format(dateFormat)
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
    tripType() {
      let tripType = ''

      if (this.mode === 'single') {
        return ''
      }

      if ((this.fromDate && this.fromDate.length > 0) && (!this.toDate || this.toDate.length === 0)) {
        tripType = 'One-way'
      } else if ((this.fromDate && this.fromDate.length > 0) && (this.toDate && this.toDate.length > 0)) {
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

  .trip-type
    position absolute
    right 6px
    top 4px
    font-size 10px
    text-transform uppercase
    font-weight bold
    color green
</style>
