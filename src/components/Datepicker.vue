// https://github.com/ankurk91/vue-flatpickr-component
// https://chmln.github.io/flatpickr/options/

<template>
    <div class="form-group datepicker" :class="classes">
        <div class="click-area">
            <i class="icon icon-left material-icons" v-show="iconLeft">{{iconLeft}}</i>
            <div class="trip-type">{{tripType}}</div>
            <div class="floating-label">{{labelText}}</div>
            <div class="selected-text">{{selectedDatesText}}</div>
            <flat-pickr :config="config" :placeholder="labelText" v-model="selectedDates"></flat-pickr>
        </div>
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

<style lang="scss" scoped>
.datepicker {
    min-width: 240px;
    overflow: hidden;
}

input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.trip-type {
    position: absolute;
    right: 8px;
    top: 0;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: $color-second;
    z-index: $z-index-high;
}
</style>
